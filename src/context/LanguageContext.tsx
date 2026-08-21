"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Dictionary, getDictionary } from "@/dictionaries";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "loanbuddy_language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ms");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "ms") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        document.documentElement.lang = "ms";
      }
    } catch {
      // localStorage may fail in restricted/incognito environments
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore storage errors
    }
  };

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
