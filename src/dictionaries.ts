import type { Dictionary } from "@/types/dictionaries";

/**
 * @description The supported locales for the application,
 */
export const supportedLocales = ["en", "es"] as const;

export const DEFAULT_LOCALE: SupportedLocales = "en";

/**
 * @description The type of the supported locales for the application.
 */
export type SupportedLocales = (typeof supportedLocales)[number];

/**
 * @description The supported locales for the application.
 * @type {SupportedLocales[]}
 */
const dictionaries: { [key in SupportedLocales]: () => Promise<Dictionary> } = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
};

/**
 * @description Get the dictionary for the given locale.
 * @param locale
 * @returns The dictionary for the given locale.
 */
export const getDictionary = async (
  locale: SupportedLocales | undefined
): Promise<Dictionary> => {
  if (!locale || !supportedLocales.includes(locale)) {
    return await dictionaries.en();
  }

  return await dictionaries[locale]();
};

/**
 * @description Get the locale for the given locale.
 * @param locale
 * @returns The locale for the given locale.
 */
export const getLocale = async (
  locale: SupportedLocales | undefined
): Promise<SupportedLocales> => {
  if (!locale || !supportedLocales.includes(locale)) return DEFAULT_LOCALE;

  return locale;
};
