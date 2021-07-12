interface HSLProps {
  h: number
  s: string
  l: string
}

interface CustomerSettings {
  accessToken: string
  customerId: string
  validUserArea: boolean
  endpoint: string
  logoUrl: string
  companyName: string
  language: string
  primaryColor: HSLProps
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
  | "favicon"
  | "gtmId"
>
