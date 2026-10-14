import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ne";

const STORAGE_KEY = "panora-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ne") return stored;
  return navigator.language?.toLowerCase().startsWith("ne") ? "ne" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "ne" ? "ne" : "en";
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLanguage(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Pick the right value for the active language (useful for bilingual config objects). */
export function pick<T>(lang: Lang, value: { en: T; ne: T }): T {
  return value[lang];
}

/** Inline translation helper: returns the Nepali string when lang is "ne", else English. */
export function tr(lang: Lang, en: string, ne: string): string {
  return lang === "ne" ? ne : en;
}
