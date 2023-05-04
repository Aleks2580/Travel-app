import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../src/languages/english/en.json";
import ruTranslation from "../src/languages/russian/ru.json";

const lng = "English"; // Default language

i18n.use(initReactI18next).init({
  resources: {
    English: {
      translation: enTranslation,
    },
    Russian: {
      translation: ruTranslation,
    },
  },
  lng: lng,
  fallbackLng: lng,
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: "languageChanged",
    useSuspense: false,
  },
});

export default i18n;
