import { bm } from "./bm";
import { en } from "./en";

export type Language = "ms" | "en";
export type Dictionary = typeof bm;

export const dictionaries: Record<Language, Dictionary> = {
  ms: bm,
  en: en,
};

export const getDictionary = (lang: Language): Dictionary => {
  return dictionaries[lang] || dictionaries.ms;
};
