/** Supported locales */
export type Locale = "en" | "vi";

/** A string with translations for each supported locale */
export type LocaleString = Record<Locale, string>;

/** Helper to create a LocaleString */
export const ls = (en: string, vi: string): LocaleString => ({ en, vi });

/** A card with title + body used inside architecture flow rows */
export interface SectionCard {
  title: LocaleString;
  body: LocaleString;
}

export interface GalleryImage {
  /** Image key relative to src/assets/projects (e.g. "alkes-have/datacake-1.png") */
  src: string;
  alt: LocaleString;
  caption?: LocaleString;
}

export interface ProjectSection {
  id: string;
  title: LocaleString;
  /** Body micro-format: \n separated lines; lines starting with "- ", "• " or "* " become bullets; [label](url) becomes a link */
  body: LocaleString;
  image?: string;
  imageAlt?: LocaleString;
  imageCaption?: LocaleString;
  /** Architecture flow label, e.g. "Meter / Sensor -> Node-RED -> InfluxDB -> Grafana" */
  flowLabel?: LocaleString;
  /** Architecture cards rendered as an arrow-connected flow row */
  cards?: SectionCard[];
  gallery?: GalleryImage[];
}

export interface TechHighlight {
  feature: LocaleString;
  technical: LocaleString;
  benefit: LocaleString;
}

export interface Project {
  id: string;
  slug: string;
  title: LocaleString;
  /** Card + hero summary */
  excerpt: LocaleString;
  industry: LocaleString;
  /** Country / region shown on cards */
  location: LocaleString;
  /** ISO date, used for sorting + display */
  publishedAt: string;
  /** Tech stack badges */
  tech: string[];
  /** Shown on the home page */
  featured: boolean;
  /** Cover image key for cards (relative to src/assets/projects) */
  cover: string;
  resultsTitle?: LocaleString;
  results: LocaleString[];
  sections: ProjectSection[];
  techHighlights?: TechHighlight[];
  ctaTitle?: LocaleString;
  ctaDescription?: LocaleString;
}
