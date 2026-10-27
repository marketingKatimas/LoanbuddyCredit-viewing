import { bm } from "./bm";
import { en } from "./en";

export type Language = "ms" | "en";
export type Dictionary = typeof bm;

// Cookie holding the visitor's chosen language, so the server can render
// the right language (and CMS content) on the very first paint.
export const LANGUAGE_COOKIE = "loanbuddy_language";

export const isLanguage = (value: unknown): value is Language =>
  value === "ms" || value === "en";

export const dictionaries: Record<Language, Dictionary> = {
  ms: bm,
  en: en,
};

export const getDictionary = (lang: Language): Dictionary => {
  return dictionaries[lang] || dictionaries.ms;
};
