/**
 * Site-wide motion layer: Lenis smooth scrolling + GSAP-driven reveals, split
 * headings, counters, parallax and pointer effects. Components opt in through
 * data attributes so their markup stays declarative:
 *
 *   data-reveal="up|fade|scale|left|right|blur"  reveal on first view (+ data-reveal-delay)
 *   data-split                                     word-by-word heading reveal (+ data-split-delay)
 *   data-scramble                                  "decoding" text effect on first view
 *   data-count                                     count up numbers like "12+"
 *   data-parallax="0.2"                            scroll-linked vertical drift
 *   data-parallax-img                              image drifts inside its (overflow-hidden) frame
 *   data-timeline / -progress / -step              scroll-drawn timeline
 *   data-spotlight / data-spotlight-group          pointer spotlight on .card elements
 *   data-tilt="6"                                  3D tilt towards the pointer (max degrees)
 *   data-magnetic="0.3"                            element leans towards the pointer
 *   data-hero / -content / -visual, data-orbit-tilt  home hero choreography
 *
 * Never put data-reveal / data-tilt on an element that also has a CSS transform
 * transition (e.g. .card) — wrap it instead, or the two will fight.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Lenis from "lenis";

declare global {
  interface Window {
    /** Shared smooth-scroll instance (absent with reduced motion) */
    __lenis?: Lenis;
  }
}

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
// The <head> script adds .motion (hiding reveal targets) and removes it again if
// this module never boots — so only animate in when content is actually hidden.
const animateIn = root.classList.contains("motion");
root.classList.add("motion-ready");

const num = (value: string | undefined, fallback = 0) => {
  const n = parseFloat(value ?? "");
  return Number.isNaN(n) ? fallback : n;
};

/** Run `fn` once when `el` first enters the viewport (or right away if it's already above it). */
function onFirstView(el: Element, fn: () => void) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          io.disconnect();
          fn();
          return;
        }
      }
    },
    { rootMargin: "0px 0px -48px 0px" }
  );
  io.observe(el);
}

/* ------------------------------------------------------------------------ */

function initSmoothScroll() {
  const lenis = new Lenis({ anchors: true, stopInertiaOnNavigate: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  window.__lenis = lenis;
}

const REVEAL_FROM: Record<string, gsap.TweenVars> = {
  up: { y: 36, opacity: 0 },
  fade: { opacity: 0 },
  scale: { y: 24, scale: 0.94, opacity: 0 },
  left: { x: -48, opacity: 0 },
  right: { x: 48, opacity: 0 },
  blur: { y: 24, opacity: 0, filter: "blur(12px)" },
};
const REVEAL_TO: gsap.TweenVars = { x: 0, y: 0, scale: 1, opacity: 1, filter: "blur(0px)" };

function initReveals() {
  let queue: HTMLElement[] = [];
  let scheduled = false;

  // Elements that enter in the same frame are staggered in document order.
  const flush = () => {
    scheduled = false;
    const batch = queue.sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    );
    queue = [];
    let staggered = 0;
    for (const el of batch) {
      el.setAttribute("data-revealed", "");
      // Scrolled past before we got to it (fast scroll / anchor jump): show it as is,
      // so it doesn't delay the elements that are actually on screen.
      if (el.getBoundingClientRect().bottom < 0) continue;
      const from = REVEAL_FROM[el.dataset.reveal || "up"] ?? REVEAL_FROM.up;
      const to: gsap.TweenVars = {};
      for (const key of Object.keys(from)) to[key] = REVEAL_TO[key];
      gsap.fromTo(el, from, {
        ...to,
        duration: 1.1,
        ease: "expo.out",
        delay: num(el.dataset.revealDelay) + Math.min(staggered++, 6) * 0.08,
        clearProps: "transform,opacity,filter",
      });
    }
  };
  const schedule = () => {
    if (queue.length && !scheduled) {
      scheduled = true;
      requestAnimationFrame(flush);
    }
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          io.unobserve(el);
          queue.push(el);
        } else if (entry.boundingClientRect.bottom < 0) {
          // Already scrolled past (e.g. restored scroll position): just show it.
          io.unobserve(el);
          el.setAttribute("data-revealed", "");
        }
      }
      schedule();
    },
    { rootMargin: "0px 0px -48px 0px" }
  );
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));

  // Bottom of the page: the root margin can keep the last few elements from ever
  // "entering", so flush whatever is visible once we can't scroll any further.
  const revealRest = () => {
    if (window.innerHeight + window.scrollY < root.scrollHeight - 4) return;
    document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])").forEach((el) => {
      // flush() shows anything above the viewport instantly, so queue those too
      if (el.getBoundingClientRect().top < window.innerHeight && !queue.includes(el)) {
        io.unobserve(el);
        queue.push(el);
      }
    });
    schedule();
  };
  window.addEventListener("scroll", revealRest, { passive: true });
  revealRest();
}

function initSplitHeadings() {
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const split = SplitText.create(el, { type: "words", wordsClass: "split-word" });
    gsap.set(split.words, { opacity: 0, yPercent: 60, filter: "blur(10px)" });
    el.setAttribute("data-revealed", "");
    onFirstView(el, () => {
      gsap.to(split.words, {
        opacity: 1,
        yPercent: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.045,
        delay: num(el.dataset.splitDelay),
        // Restore the original markup so gradients / links / selection behave normally
        onComplete: () => split.revert(),
      });
    });
  });
}

function initScramble() {
  document.querySelectorAll<HTMLElement>("[data-scramble]").forEach((el) => {
    const text = el.textContent ?? "";
    el.textContent = "";
    onFirstView(el, () => {
      gsap.to(el, {
        duration: Math.min(2, 0.6 + text.length * 0.03),
        delay: num(el.dataset.scrambleDelay, 0.1),
        ease: "none",
        scrambleText: { text, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_", speed: 0.6 },
      });
    });
  });
}

function initCounters() {
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const match = (el.textContent ?? "").trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = Number(match[1]);
    const suffix = match[2];
    const state = { value: 0 };
    el.textContent = `0${suffix}`;
    onFirstView(el, () => {
      gsap.to(state, {
        value: target,
        duration: 1.8,
        delay: 0.3,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = `${Math.round(state.value)}${suffix}`;
        },
      });
    });
  });
}

function initTimelines() {
  document.querySelectorAll<HTMLElement>("[data-timeline]").forEach((timeline) => {
    const progress = timeline.querySelector<HTMLElement>("[data-timeline-progress]");
    if (progress) {
      gsap.fromTo(
        progress,
        { "--progress": 0 },
        {
          "--progress": 1,
          ease: "none",
          scrollTrigger: { trigger: timeline, start: "top 65%", end: "bottom 65%", scrub: 0.4 },
        }
      );
    }
    timeline.querySelectorAll<HTMLElement>("[data-timeline-step]").forEach((step) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 65%",
        onEnter: () => step.classList.add("is-active"),
        onLeaveBack: () => step.classList.remove("is-active"),
      });
    });
  });
}

function initParallax() {
  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = num(el.dataset.parallax, 0.15);
    gsap.fromTo(
      el,
      { yPercent: speed * 50 },
      {
        yPercent: -speed * 50,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });

  document.querySelectorAll<HTMLElement>("[data-parallax-img]").forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -4, scale: 1.1 },
      {
        yPercent: 4,
        scale: 1.1,
        ease: "none",
        scrollTrigger: { trigger: img.parentElement ?? img, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });
}

/** Home hero: content drifts up, the orbit sinks and fades as the hero scrolls away. */
function initHero() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;
  const content = hero.querySelector("[data-hero-content]");
  const visual = hero.querySelector("[data-hero-visual]");
  if (content) {
    gsap.to(content, {
      y: -60,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    });
  }
  if (visual) {
    gsap.to(visual, {
      y: 90,
      scale: 0.88,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    });
  }
}

/* ---------------------------- pointer effects ---------------------------- */

function initSpotlights() {
  const groups = new Set<HTMLElement>();
  document.querySelectorAll<HTMLElement>("[data-spotlight]").forEach((card) => {
    groups.add(card.closest<HTMLElement>("[data-spotlight-group]") ?? card);
  });
  groups.forEach((group) => {
    const cards = group.matches("[data-spotlight]")
      ? [group]
      : Array.from(group.querySelectorAll<HTMLElement>("[data-spotlight]"));
    let frame = 0;
    group.addEventListener("pointermove", (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          card.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }
      });
    });
  });
}

function initTilt() {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    const max = num(el.dataset.tilt, 6);
    gsap.set(el, { transformPerspective: 1100 });
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.8, ease: "power3" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.8, ease: "power3" });
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      ry(((e.clientX - rect.left) / rect.width - 0.5) * max * 2);
      rx(-((e.clientY - rect.top) / rect.height - 0.5) * max * 2);
    });
    el.addEventListener("pointerleave", () => {
      rx(0);
      ry(0);
    });
  });
}

function initMagnetic() {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = num(el.dataset.magnetic, 0.3);
    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      x((e.clientX - (rect.left + rect.width / 2)) * strength);
      y((e.clientY - (rect.top + rect.height / 2)) * strength);
    });
    el.addEventListener("pointerleave", () => {
      x(0);
      y(0);
    });
  });
}

function initOrbitTilt() {
  const tilt = document.querySelector<HTMLElement>("[data-orbit-tilt]");
  if (!tilt) return;
  const area = tilt.closest<HTMLElement>("[data-hero]") ?? document.body;
  const rx = gsap.quickTo(tilt, "rotationX", { duration: 1.4, ease: "power3" });
  const ry = gsap.quickTo(tilt, "rotationY", { duration: 1.4, ease: "power3" });
  area.addEventListener("pointermove", (e) => {
    ry((e.clientX / window.innerWidth - 0.5) * 24);
    rx(-(e.clientY / window.innerHeight - 0.5) * 24);
  });
  area.addEventListener("pointerleave", () => {
    rx(0);
    ry(0);
  });
}

function initCursorGlow() {
  const glow = document.querySelector<HTMLElement>("[data-cursor-glow]");
  if (!glow) return;
  const x = gsap.quickTo(glow, "x", { duration: 0.9, ease: "power3" });
  const y = gsap.quickTo(glow, "y", { duration: 0.9, ease: "power3" });
  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      if (!glow.classList.contains("is-active")) {
        gsap.set(glow, { x: e.clientX, y: e.clientY });
        glow.classList.add("is-active");
      }
      x(e.clientX);
      y(e.clientY);
    },
    { passive: true }
  );
  root.addEventListener("pointerleave", () => glow.classList.remove("is-active"));
}

/* --------------------------------- boot ---------------------------------- */

if (!reduceMotion) initSmoothScroll();

if (animateIn) {
  initSplitHeadings();
  initScramble();
  initCounters();
  initReveals();
  initTimelines();
}

if (!reduceMotion) {
  initParallax();
  initHero();
}

initSpotlights();

if (finePointer && !reduceMotion) {
  initTilt();
  initMagnetic();
  initOrbitTilt();
  initCursorGlow();
}

// Fonts shift layout slightly once loaded — recompute trigger positions.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
