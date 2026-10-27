"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useLocalizedContent, type LocalizedContent } from "@/hooks/useLocalizedContent";

const FooterContentContext = createContext<any | null>(null);

const selectFooterDoc = (json: any) => json?.doc || json || null;

// Mounted in the root layout so the footer content survives page navigations
// and is only refetched when the visitor switches language.
export function FooterContentProvider({
  initial,
  children,
}: {
  initial: LocalizedContent<any | null>;
  children: ReactNode;
}) {
  const footer = useLocalizedContent(initial, "/api/globals/footer", selectFooterDoc);
  return <FooterContentContext.Provider value={footer}>{children}</FooterContentContext.Provider>;
}

export function useFooterContent(): any | null {
  return useContext(FooterContentContext);
}
