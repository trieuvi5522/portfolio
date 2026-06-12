import type { ImageMetadata } from "astro";

/**
 * Eagerly import every project image so data files can reference them by a
 * simple key like "alkes-have/datacake-1.png".
 * A missing key throws at build time, so typos never reach production.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export function projectImage(key: string): ImageMetadata {
  const path = `/src/assets/projects/${key}`;
  const mod = images[path];
  if (!mod) {
    throw new Error(
      `[images] Missing project image "${key}" (looked for ${path}). ` +
        `Available: ${Object.keys(images).join(", ")}`
    );
  }
  return mod.default;
}
