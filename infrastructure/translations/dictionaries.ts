import "server-only";

export type Locale = "en" | "es" | "de";

export const locales: Locale[] = ["en", "es", "de"];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("./locales/en.json").then((m) => m.default),
  es: () => import("./locales/es.json").then((m) => m.default),
  de: () => import("./locales/de.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
