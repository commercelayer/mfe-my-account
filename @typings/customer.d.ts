interface CustomerSettings {
  accessToken: string
  validUserArea: boolean
  endpoint: string
  logoUrl?: string
  companyName: string
  language: string
  primaryColor: string
  favicon: string
  isGuest: boolean
  customerId: string
  gtmId?: string
}

type InvalidCustomerSettings = Pick<
  CustomerSettings,
  "primaryColor" | "language" | "favicon" | "companyName" | "logoUrl"
> & {
  validUserArea: false
  retryable: boolean
}