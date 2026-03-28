import "server-only";

import type { Locale } from "../types/locale";

export type { Dictionary } from "./locales";
import loadLocale from "./locales";

export const locales: Locale[] = ["en", "es", "de"];
export const defaultLocale: Locale = "en";

export const getDictionary = async (locale: Locale) => loadLocale(locale);

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale);
