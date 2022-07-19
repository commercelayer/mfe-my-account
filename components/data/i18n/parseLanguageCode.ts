type ApiLanguageCode = "en" | "it"

const langs = {
  en: "en",
  it: "it",
}

export const parseLanguageCode = (apiLanguageCode: string) =>
  langs[apiLanguageCode as ApiLanguageCode] || langs.en
