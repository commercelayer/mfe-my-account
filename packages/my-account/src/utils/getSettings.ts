import CommerceLayer from "@commercelayer/sdk"
import type { Settings, InvalidSettings } from "HostedApp"

import { getInfoFromJwt } from "#utils/getInfoFromJwt"
import { getOrganizations } from "#utils/getOrganizations"
import { isValidHost } from "#utils/isValidHost"

// default settings are by their nature not valid to show My Account data
// they will be used as fallback for errors or 404 page
export const defaultSettings: InvalidSettings = {
  isValid: false,
  primaryColor: "#000000",
  language: "en",
  faviconUrl:
    "https://data.commercelayer.app/assets/images/favicons/favicon-32x32.png",
  companyName: "Commerce Layer",
  retryable: false,
}

const makeInvalidSettings = (retryable?: boolean): InvalidSettings => ({
  ...defaultSettings,
  retryable: !!retryable,
})

type GetSettingsProps = Pick<Settings, "accessToken"> & {
  config: CommerceLayerAppConfig
}

/**
 * Retrieves a list of `Settings` required to show the my account app
 *
 * @param accessToken - Access Token for a sales channel API credentials to be used to authenticate all Commerce Layer API requests.
 * Read more at {@link https://docs.commercelayer.io/developers/authentication/client-credentials#sales-channel}, {@link https://docs.commercelayer.io/core/authentication/password}
 *
 * @returns an union type of `Settings` or `InvalidSettings`
 */
export const getSettings = async ({
  accessToken,
  config,
}: GetSettingsProps): Promise<Settings | InvalidSettings> => {
  const domain = config.domain
  const { slug, kind, customerId, isTest } = getInfoFromJwt(accessToken)

  if (!slug) {
    return makeInvalidSettings()
  }

  if (kind !== "sales_channel") {
    return makeInvalidSettings()
  }

  if (!customerId) {
    return makeInvalidSettings()
  }

  const hostname = typeof window && window.location.hostname
  if (
    !isValidHost({
      hostname,
      accessToken,
      selfHostedSlug: config.selfHostedSlug,
    })
  ) {
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
