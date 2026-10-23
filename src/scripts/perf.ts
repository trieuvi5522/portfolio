/**
 * Performance mode. Devices that can't keep the full effects smooth switch to "lite"
 * (<html data-perf="lite">): the same layout and colours, with the expensive parts swapped
 * for look-alikes — solid glass instead of live backdrop blur, a still aurora, native
 * scrolling instead of Lenis, and text reveals without the blur.
 *
 * A device counts as weak when any of these holds:
 *   1. ?perf=lite is in the URL (?perf=full forces the full effects, ?perf=auto goes back
 *      to detection) — handled by the <head> script in BaseLayout, remembered in this browser
 *   2. it reports at most 2 CPU threads or 2 GB of RAM — also in <head>, before first paint
 *   3. its typical (median) frame rate stays under 45 fps while the page settles after load —
 *      measured here and remembered for 7 days, so later pages start in lite mode right away
 */
const root = document.documentElement;

const LITE_BELOW_FPS = 45;
const SETTLE_MS = 1000;
const MEASURE_MS = 2000;
const REMEMBER_MS = 7 * 24 * 60 * 60 * 1000;
const LITE_EVENT = "perf:lite";

export const isLite = () => root.dataset.perf === "lite";

/** Run `fn` if the page switches to lite mode after boot. */
export function onLite(fn: () => void) {
  window.addEventListener(LITE_EVENT, fn, { once: true });
}

function enableLite() {
  root.dataset.perf = "lite";
  try {
    localStorage.setItem("perf-mode", JSON.stringify({ mode: "lite", until: Date.now() + REMEMBER_MS }));
  } catch (e) {}
  window.dispatchEvent(new Event(LITE_EVENT));
}

/** Median frame rate over `duration` ms, or null if the tab was hidden meanwhile (no verdict). */
function measureFps(duration: number): Promise<number | null> {
  return new Promise((resolve) => {
    const frameTimes: number[] = [];
    let start = 0;
    let last = 0;
    let hidden = false;
    const onHide = () => (hidden = true);
    document.addEventListener("visibilitychange", onHide, { once: true });

    const tick = (now: number) => {
      if (hidden) return resolve(null);
      if (last) frameTimes.push(now - last);
      else start = now;
      last = now;
      if (now - start < duration) {
        requestAnimationFrame(tick);
        return;
      }

      document.removeEventListener("visibilitychange", onHide);
      // The median ignores one-off hitches (an image decoding, a font swap) and reflects
      // how the page feels most of the time.
      frameTimes.sort((a, b) => a - b);
      const median = frameTimes[Math.floor(frameTimes.length / 2)];
      resolve(median ? 1000 / median : null);
    };
    requestAnimationFrame(tick);
  });
}

async function detect() {
  if (document.hidden) return;
  const fps = await measureFps(MEASURE_MS);
  if (fps !== null && fps < LITE_BELOW_FPS) enableLite();
}

// Nothing to decide when the mode is already set (forced, remembered or hardware-based), or
// when reduced motion already turns the moving parts off.
if (!root.dataset.perf && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const start = () => setTimeout(detect, SETTLE_MS);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}
