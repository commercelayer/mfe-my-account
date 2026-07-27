import type { AllowedLocaleKeys } from "react-i18next"

type ApiLanguageCode =
  | "en"
  | "de"
  | "es"
  | "fr"
  | "hr"
  | "hu"
  | "it"
  | "nl"
  | "pl"
  | "pt"
  | "sl"

const langs: Record<ApiLanguageCode, AllowedLocaleKeys> = {
  en: "en",
  de: "de",
  es: "es",
  fr: "fr",
  hr: "hr",
  hu: "hu",
  it: "it",
  nl: "nl",
  pl: "pl",
  pt: "pt",
  sl: "sl",
}

export const parseLanguageCode = (apiLanguageCode: string) =>
  langs[apiLanguageCode as ApiLanguageCode] || langs.en
