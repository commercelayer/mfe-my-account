import CommerceLayer from "@commercelayer/sdk"

import { getInfoFromJwt } from "./getInfoFromJwt"
import { getOrder } from "./getOrder"
import { getOrganizations } from "./getOrganizations"
import { isValidHost } from "./isValidHost"

// default settings are by their nature not valid to show a full cart
// they will be used as fallback for errors or 404 page
export const defaultSettings: InvalidCustomerSettings = {
  validUserArea: false,
  primaryColor: "#000000",
  language: "en",
  favicon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`,
  companyName: "Commerce Layer",
  retryable: false,
}

const makeInvalidSettings = (retryable?: boolean): InvalidCustomerSettings => ({
  ...defaultSettings,
  retryable: !!retryable,
})

export const getSettings = async ({
  accessToken,
  orderId,
}: {
  accessToken: string
  orderId?: string | undefined
}): Promise<CustomerSettings | InvalidCustomerSettings> => {
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
    })
  ])

  // validating organization
  const organization = organizationResponse?.object
  if (!organization) {
    return makeInvalidSettings(!organizationResponse?.bailed)
  }

  if (orderId) {
    const [orderResponse] = await Promise.all([
      getOrder({ orderId, client }),
    ])

    // validating order
    const order = orderResponse?.object
    if (!order) {
      return makeInvalidSettings(!orderResponse?.bailed)
    }
  }

  return {
    accessToken,
    endpoint: `https://${slug}.${domain}`,
    isGuest: !customerId ? true : false,
    customerId: customerId as string ,
    validUserArea: true,
    companyName: organization?.name || defaultSettings.companyName,
    language: defaultSettings.language,
    primaryColor: organization?.primary_color as string || defaultSettings.primaryColor,
    logoUrl: organization?.logo_url || '',
    favicon: organization?.favicon_url || defaultSettings.favicon,
    gtmId: isTest ? organization?.gtm_id_test : organization?.gtm_id,
  }
}