import type { Locale, LocaleString } from "../data/types";
import { ui, defaultLocale, type UIKey } from "./ui";

/** Extract the locale from a URL ("/vi/..." -> "vi", otherwise "en") */
export function getLangFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split("/");
  if (first === "vi") return "vi";
  return defaultLocale;
}

/** Translation helper: const t = useTranslations(lang); t("nav.home") */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}

/** Pick the localized value out of a LocaleString */
export function pick(value: LocaleString, lang: Locale): string {
  return value[lang] ?? value[defaultLocale];
}

/** Strip the locale prefix from a pathname ("/vi/projects" -> "/projects") */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/vi(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/** Build a locale-aware path: localePath("/projects", "vi") -> "/vi/projects" */
export function localePath(path: string, lang: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/** Same page in the other locale (for the language switcher + hreflang) */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(stripLocale(pathname), target);
}

/** Format an ISO date for display in the current locale */
export function formatDate(iso: string, lang: Locale): string {
  return new Date(iso).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
