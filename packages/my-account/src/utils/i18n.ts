import i18n, { use } from "i18next"
import { initReactI18next } from "react-i18next"

import translationDE from "#assets/locales/de/common.json"
import translationEN from "#assets/locales/en/common.json"
import translationES from "#assets/locales/es/common.json"
import translationFR from "#assets/locales/fr/common.json"
import translationHR from "#assets/locales/hr/common.json"
import translationHU from "#assets/locales/hu/common.json"
import translationIT from "#assets/locales/it/common.json"
import translationNL from "#assets/locales/nl/common.json"
import translationPL from "#assets/locales/pl/common.json"
import translationPT from "#assets/locales/pt/common.json"
import translationSL from "#assets/locales/sl/common.json"

const languages = [
  "en",
  "de",
  "es",
  "fr",
  "hr",
  "hu",
  "it",
  "nl",
  "pl",
  "pt",
  "sl",
]

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  hr: {
    translation: translationHR,
  },
  hu: {
    translation: translationHU,
  },
  it: {
    translation: translationIT,
  },
  nl: {
    translation: translationNL,
  },
  pl: {
    translation: translationPL,
  },
  pt: {
    translation: translationPT,
  },
  sl: {
    translation: translationSL,
  },
}

use(initReactI18next).init({
  resources,
  lng: languages[0],
  fallbackLng: languages,
})

export default i18n
