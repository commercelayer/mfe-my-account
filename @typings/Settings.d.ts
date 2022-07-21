declare module "HostedApp" {
  export type Settings = {
    accessToken: string
    endpoint: string
    logoUrl?: string
    companyName: string
    language: string
    primaryColor: string
    favicon: string
    isGuest: boolean
    customerId: string
    isValid: true
    gtmId?: string
  }

  type InvalidSettings = Pick<
    Settings,
    "primaryColor" | "language" | "favicon" | "companyName" | "logoUrl"
  > & {
    isValid: false
    retryable: boolean
  }
}
