declare module "HostedApp" {
  /**
   * Settings are all the settings used by the my-account application:
   * Starting from @accessToken we can get all the settings needed
   * for the my account to work, picking them from the order and the
   * organization resources. (Organization: https://docs.commercelayer.io/core/v/api-reference/organization/object)
   */

  export type Settings = {
    /**
     * Access Token for a sales channel API credentials to be used to authenticate all Commerce Layer API requests.
     * Read more at {@link https://docs.commercelayer.io/core/authentication/client-credentials#sales-channel}
     */
    accessToken: string
    /**
     * Base endpoint URL to be used for API requests by `@commercelayer/react-components` library.
     * Example: `https://yourdomain.commercelayer.io`
     * Read more at {@link https://docs.commercelayer.io/core/api-specification#base-endpoint}.
     */
    endpoint: string
    /**
     * Organization name.
     * Read more at {@link https://docs.commercelayer.io/core/v/api-reference/organization/object}.
     */
    companyName: string
    /**
     * Primary color HEX code found, if set, in current organization.
     * It will be used to generate custom CSS (example: primary button style).
     * Read more at {@link https://docs.commercelayer.io/core/v/api-reference/organization/object}.
     */
    primaryColor: string
    /**
     * Logo URL found in current organization (if set).
     * Read more at {@link https://docs.commercelayer.io/core/v/api-reference/organization/object}.
     */
    logoUrl?: string
    /**
     * Favicon URL found, if set, in current organization
     * Read more at {@link https://docs.commercelayer.io/core/v/api-reference/organization/object}.
     */
    faviconUrl: string
    /**
     * The organization's Google Tag Manager ID.
     * Read more at {@link https://docs.commercelayer.io/core/v/api-reference/organization/object}.
     */
    gtmId?: string
    /**
     * The application's running language code.
     * During the application initialization the default language code is set to "en".
     */
    language: string
    /**
     * Customer Id information picked by owner?.id property inside parsed accessToken
     * Read more at {@link https://docs.commercelayer.io/core/authentication/password}
     */
    customerId: string
    /**
     * When `true` it indicates that current accessToken is not owned by a customer.
     * This conditional variable allows the application to show/hide or enable/disable
     * particular behaviours depending on dealing or not with a logged customer.
     */
    isGuest: boolean
    /**
     * This flag allows TypeScript to discriminate between `Settings` and `InvalidSettings` union type.
     */
    isValid: true
  }

  type InvalidSettings = Pick<
    Settings,
    "primaryColor" | "language" | "companyName" | "logoUrl" | "faviconUrl"
  > & {
    /**
     * This flag allows TypeScript to discriminate between `Settings` and `InvalidSettings` union type.
     */
    isValid: false
    /**
     * When `true`, it indicates the encountered error might be temporary (eg. connectivity error)
     * and the user can manually retry by refreshing browser tab.
     */
    retryable: boolean
  }
}
