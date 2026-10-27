"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/dictionaries";

/** Content plus the language it was loaded in (null = not loaded yet). */
export interface LocalizedContent<T> {
  language: Language | null;
  data: T;
}

/**
 * Starts from content rendered on the server and only refetches when the
 * visitor's language differs from the language that content was loaded in,
 * so the first paint already shows the final text instead of swapping it in.
 *
 * `select` maps the JSON response to the content and must be a stable
 * (module-level) function.
 */
export function useLocalizedContent<T>(
  initial: LocalizedContent<T>,
  endpoint: string,
  select: (json: any) => T,
): T {
  const { language } = useLanguage();
  const [content, setContent] = useState(initial);

  useEffect(() => {
    if (content.language === language) return;

    let cancelled = false;
    const separator = endpoint.includes("?") ? "&" : "?";
    fetch(`${endpoint}${separator}locale=${language}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setContent({ language, data: select(json) });
      })
      .catch(() => { });

    return () => {
      cancelled = true;
    };
  }, [endpoint, select, language, content.language]);

  return content.data;
}

const selectPageDoc = (json: any) => json?.doc ?? null;

/** CMS page content for `slug`, seeded with the server-rendered copy. */
export function usePageContent(slug: string, initial: LocalizedContent<any>) {
  return useLocalizedContent(initial, `/api/content?slug=${encodeURIComponent(slug)}`, selectPageDoc);
}
