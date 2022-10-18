import CommerceLayer from "@commercelayer/sdk"
import { Settings, InvalidSettings } from "HostedApp"

import { getInfoFromJwt } from "./getInfoFromJwt"
import { getOrder } from "./getOrder"
import { getOrganizations } from "./getOrganizations"
import { isValidHost } from "./isValidHost"

// default settings are by their nature not valid to show a full cart
// they will be used as fallback for errors or 404 page
export const defaultSettings: InvalidSettings = {
  isValid: false,
  primaryColor: "#000000",
  language: "en",
  faviconUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`,
  companyName: "Commerce Layer",
  retryable: false,
}

const makeInvalidSettings = (retryable?: boolean): InvalidSettings => ({
  ...defaultSettings,
  retryable: !!retryable,
})

type GetSettingsProps = Pick<Settings, "accessToken"> & {
  orderId?: string
}

/**
 * Retrieves a list of `Settings` required to show the my account app
 *
 * @param accessToken - Access Token for a sales channel API credentials to be used to authenticate all Commerce Layer API requests.
 * Read more at {@link https://docs.commercelayer.io/developers/authentication/client-credentials#sales-channel}
 * @param orderId - Not required Order Id used, if filled, to verify if it exists the requested order.
 * Read more at {@link https://docs.commercelayer.io/developers/api-specification#base-endpoint}.
 *
 * @returns an union type of `Settings` or `InvalidSettings`
 */
export const getSettings = async ({
  accessToken,
  orderId,
}: GetSettingsProps): Promise<Settings | InvalidSettings> => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "commercelayer.io"
  const { slug, kind, customerId, isTest } = getInfoFromJwt(accessToken)

  if (!slug) {
    return makeInvalidSettings()
  }

  if (kind !== "sales_channel") {
    return makeInvalidSettings()
  }

  const hostname = typeof window && window.location.hostname
  if (!isValidHost(hostname, accessToken)) {
    return makeInvalidSettings()
  }

  const client = CommerceLayer({
    organization: slug,
    accessToken,
    domain,
  })

  const [organizationResponse] = await Promise.all([
    getOrganizations({
      client,
    }),
  ])

  // validating organization
  const organization = organizationResponse?.object
  if (!organization) {
    return makeInvalidSettings(!organizationResponse?.bailed)
  }

  if (orderId) {
    const [orderResponse] = await Promise.all([getOrder({ orderId, client })])

    // validating order
    const order = orderResponse?.object
    if (!order) {
      return makeInvalidSettings(!orderResponse?.bailed)
    }
  }

  return {
    accessToken,
    endpoint: `https://${slug}.${domain}`,
    isGuest: !customerId,
    customerId: customerId as string,
    isValid: true,
    companyName: organization?.name || defaultSettings.companyName,
    language: defaultSettings.language,
    primaryColor:
      (organization?.primary_color as string) || defaultSettings.primaryColor,
    logoUrl: organization?.logo_url || "",
    faviconUrl: organization?.favicon_url || defaultSettings.faviconUrl,
    gtmId: isTest ? organization?.gtm_id_test : organization?.gtm_id,
  }
}
