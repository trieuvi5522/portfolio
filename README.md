# Luca Nguyen — Portfolio

Personal portfolio website for **Luca Nguyen** (IoT Specialist & Automation Engineer), showcasing real-world IoT projects across Vietnam, Denmark, and Germany.

Built with **Astro 5 + Tailwind CSS v4** — fully static, bilingual (EN/VI), light/dark theme, optimized for Cloudflare Pages.

## ✨ Features

- **Bilingual**: English at `/`, Vietnamese at `/vi/` (with hreflang + localized sitemap)
- **Light theme by default + dark mode toggle** (persisted in `localStorage`, no flash on load)
- **4 detailed project case studies** with architecture flow cards, tech highlight tables, image galleries, and a lightbox
- **Optimized images**: all dashboard screenshots converted to responsive WebP at build time (e.g. 1.4 MB → 43 kB)
- **SEO**: canonical URLs, Open Graph tags, hreflang alternates, sitemap, robots.txt

## 🧞 Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `http://localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## 🚀 Deploy to Cloudflare Pages

This is a pure static site — no adapter or server functions needed.

### Option A — Git integration (recommended)

1. Push this folder to a GitHub repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, select the repo.
3. Build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Under **Settings → Environment variables**, add `NODE_VERSION = 22`.
5. Deploy. Every push to the main branch redeploys automatically.

### Option B — Direct upload with Wrangler

```sh
npm run build
npx wrangler pages deploy dist
```

(Log in with `npx wrangler login` the first time.)

### After deploying

Update the `site` URL in [astro.config.mjs](astro.config.mjs) and the `Sitemap:` line in [public/robots.txt](public/robots.txt) to your real domain (your `*.pages.dev` URL or custom domain), then rebuild & redeploy. This keeps canonical URLs, og tags, and the sitemap correct.

## 📁 Project Structure

```
src/
├─ assets/projects/      # Project images (optimized by astro:assets at build)
├─ components/
│  ├─ pages/             # Shared page bodies (Home, Projects, Detail, About, Contact)
│  └─ project/           # Case-study building blocks (sections, gallery, lightbox…)
├─ data/
│  ├─ projects.ts        # ★ All 4 project case studies (bilingual)
│  ├─ site.ts            # Owner identity + contact links
│  └─ types.ts           # Shared types + ls() helper
├─ i18n/
│  ├─ ui.ts              # ★ UI strings + About content (EN/VI)
│  └─ utils.ts           # Locale helpers (paths, translations, dates)
├─ layouts/BaseLayout.astro  # <head>, SEO, theme script, header/footer
└─ pages/                # Routes: EN at root, VI under /vi/ (thin shells)
```

★ = edit these files to update content.

## ✏️ Editing content

- **Add/edit a project**: edit `src/data/projects.ts`. Every text field uses `ls("English", "Tiếng Việt")`. Images are referenced by key relative to `src/assets/projects/` — drop new images there (kebab-case filenames) and reference them; a typo in an image key fails the build with a clear error.
- **Update UI text / About page**: edit `src/i18n/ui.ts`.
- **Contact info**: edit `src/data/site.ts`.

## 📝 Notes

- A contact **form** is intentionally omitted (static site). It can be added later as a Cloudflare Pages Function at `/api/contact` without changing the architecture — the contact page currently offers email (with copy button), WhatsApp, LinkedIn, and Facebook shortcuts.
- Tailwind v4 is configured entirely in [src/styles/global.css](src/styles/global.css) (`@theme`, `@custom-variant`) — there is no `tailwind.config.js`.
