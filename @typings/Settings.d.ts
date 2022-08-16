declare module "HostedApp" {
  /**
   * Settings are all the settings used by the checkout application:
   * Starting from @accessToken we can get all the settings needed
   * for the my account to work, picking them from the order and the
   * organization resources. (Organization: https://docs.commercelayer.io/developers/v/api-reference/organization/object)
   */

  export type Settings = {
    /** Access Token required to consume Commerce Layer APIs */
    accessToken: string
    /** Endpoint URL required to consume Commerce Layer APIs */
    endpoint: string
    /** Organization's logo URL */
    logoUrl?: string
    /** Organization's name */
    companyName: string
    language: string
    /** Organization's primary color */
    primaryColor: string
    /** Organization's favicon URL */
    favicon: string
    /** Conditional argument to verify if current accessToken is related to a customer or is for guest use */
    isGuest: boolean
    /** Customer Id picked by accessToken (if a valid customer is set) */
    customerId: string
    /** Conditional argument to verify if application settings are valid or not */
    isValid: true
    /** Organization's Google Tag Manager code */
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
