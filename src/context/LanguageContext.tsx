"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Dictionary, getDictionary, LANGUAGE_COOKIE, isLanguage } from "@/dictionaries";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Kept as a fallback for browsers that block cookies, and to migrate
// choices saved before the language cookie existed.
const STORAGE_KEY = "loanbuddy_language";

const hasLanguageCookie = () =>
  document.cookie.split("; ").some((c) => c.startsWith(`${LANGUAGE_COOKIE}=`));

export function LanguageProvider({
  children,
  initialLanguage = "ms",
}: {
  children: ReactNode;
  // Read from the language cookie on the server, so the first paint is already in the right language
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
  };

  // Without the cookie the server could only render the default language;
  // apply a choice saved in localStorage (older visits, or cookies blocked).
  useEffect(() => {
    if (hasLanguageCookie()) return;
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (isLanguage(savedLang) && savedLang !== initialLanguage) {
        setLanguage(savedLang);
      }
    } catch {
      // localStorage may fail in restricted/incognito environments
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  const toggleLanguage = () => {
    const nextLang: Language = language === "ms" ? "en" : "ms";
    setLanguage(nextLang);
  };

  const t = getDictionary(language);
  const isEnglish = language === "en";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isEnglish,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return a safe fallback default if rendered outside provider
    return {
      language: "ms",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: getDictionary("ms"),
      isEnglish: false,
    };
  }
  return context;
}
