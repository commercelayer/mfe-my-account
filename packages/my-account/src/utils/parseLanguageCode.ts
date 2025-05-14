import type { AllowedLocaleKeys } from "react-i18next"

type ApiLanguageCode = "en" | "it" | "nl"

const langs: Record<ApiLanguageCode, AllowedLocaleKeys> = {
  en: "en",
  it: "it",
  nl: "nl",
}

export const parseLanguageCode = (apiLanguageCode: string) =>
  langs[apiLanguageCode as ApiLanguageCode] || langs.en
