import "server-only";

import type { Locale } from "../types/locale";

export const locales: Locale[] = ["en", "es", "de"];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("./locales/en.json").then((m) => m.default),
  es: () => import("./locales/es.json").then((m) => m.default),
  de: () => import("./locales/de.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);
