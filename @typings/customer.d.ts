interface CustomerSettings {
  accessToken: string
  customerId: string
  validUserArea: boolean
  endpoint: string
  logoUrl?: string
  companyName: string
  language: string
  primaryColor: string
  favicon: string
  gtmId?: string
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
  | "favicon"
  | "gtmId"
>

type InvalidCustomerSettings = Pick<
  CustomerSettings,
  "primaryColor" | "language" | "favicon" | "companyName" | "logoUrl"
> & {
  isValid: false
  retryable: boolean
}