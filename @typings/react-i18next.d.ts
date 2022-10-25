import "react-i18next"
import commonEn from "public/static/locales/en/common.json"

declare module "react-i18next" {
  export type AllowedLocaleKeys = "en" | "it"

  type AppResources = {
    common: typeof commonEn
  }

  type CustomTypeOptions = {
    defaultNS: "common"
    resources: AppResources
  }
}
