import "react-i18next"
import commonEn from "#assets/locales/en/common.json"

declare module "react-i18next" {
  export type AllowedLocaleKeys = "en" | "it"| "nl"

  interface AppResources {
    common: typeof commonEn
  }

  interface CustomTypeOptions {
    defaultNS: "common"
    resources: AppResources
  }
}
