import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../src/languages/english/en.json";
import ruTranslation from "../src/languages/russian/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    English: {
      translation: enTranslation,
    },
    Russian: {
      translation: ruTranslation,
    },
  },
  lng: "English",
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
