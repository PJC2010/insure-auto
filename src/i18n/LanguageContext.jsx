import { createContext, useContext, useEffect, useState } from "react";
import { translations, LANGUAGES, DEFAULT_LANGUAGE } from "./translations";

const STORAGE_KEY = "insureauto-lang";

const LanguageContext = createContext(null);

// Reads the saved preference, otherwise falls back to the browser language
// (Spanish speakers land in Spanish automatically) and finally to English.
function getInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && LANGUAGES.includes(saved)) return saved;

  const browser = (window.navigator.language || "").toLowerCase();
  if (browser.startsWith("es")) return "es";

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    if (LANGUAGES.includes(next)) setLangState(next);
  };

  const toggle = () => setLangState((current) => (current === "es" ? "en" : "es"));

  const value = {
    lang,
    setLang,
    toggle,
    // Resolved dictionary for the active language.
    L: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
