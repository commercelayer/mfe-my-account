import i18n, { use } from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "#assets/locales/en/common.json"
import translationIT from "#assets/locales/it/common.json"
import translationNL from "#assets/locales/nl/common.json"

const languages = ["en", "it", "nl"]

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
  nl: {
    translation: translationNL,
  },
}

use(initReactI18next).init({
  resources,
  lng: languages[0],
  fallbackLng: languages,
})

export default i18n
