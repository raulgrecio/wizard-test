import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./es/translation.json";
import en from "./en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {},
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

//add asynchronous languages
i18n.addResourceBundle("en", "translation", en);
i18n.addResourceBundle("es", "translation", es);

export default i18n;
