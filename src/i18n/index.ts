import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const savedLang = localStorage.getItem("sw-lang");
const defaultLang = savedLang === "ar" || savedLang === "en" ? savedLang : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export function setLanguage(lang: "en" | "ar") {
  localStorage.setItem("sw-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  void i18n.changeLanguage(lang);
}

document.documentElement.lang = defaultLang;
document.documentElement.dir = defaultLang === "ar" ? "rtl" : "ltr";

export default i18n;
