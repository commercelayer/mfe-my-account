import i18n, { use } from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "#assets/locales/en/common.json"
import translationIT from "#assets/locales/it/common.json"

const languages = ["en", "it"]

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
}

use(initReactI18next).init({
  resources,
  lng: languages[0],
  fallbackLng: languages,
})

export default i18n
