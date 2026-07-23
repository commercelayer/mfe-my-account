import "react-i18next"
import type commonEn from "#assets/locales/en/common.json"

declare module "react-i18next" {
  export type AllowedLocaleKeys =
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

  interface AppResources {
    common: typeof commonEn
  }

  interface CustomTypeOptions {
    defaultNS: "common"
    resources: AppResources
  }
}
