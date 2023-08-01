import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engTrans from "../locales/english.json";
import marTrans from "../locales/marathi.json";

export default function i18Instance() {
  i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: engTrans
      },
      
      mr: {
        translation: marTrans
      }

    },

    lng: "en", 
    fallbackLng: "mr",

    interpolation: {
      escapeValue: false 
    }
  });
}