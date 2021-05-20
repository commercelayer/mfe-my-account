interface CustomerSettings {
  accessToken: string
  customerId: string
  validUserArea: boolean
  endpoint: string
  logoUrl: string
  companyName: string
  language: string
  primaryColor: string
  contrastColor: string
  favicon: string
  gtmId: string
}

type CustomerPageContextProps = Pick<
  CustomerSettings,
  | "accessToken"
  | "customerId"
  | "logoUrl"
  | "companyName"
  | "endpoint"
  | "language"
  | "primaryColor"
  | "contrastColor"
  | "favicon"
  | "gtmId"
>
