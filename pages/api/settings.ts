// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CommerceLayer from "@commercelayer/sdk"
import { getInfoFromJwt } from "utils/getInfoFromJwt"
import { getOrganizationsDetails } from "utils/getOrganizationDetails"
import type { NextApiRequest, NextApiResponse } from "next"

import hex2hsl, { BLACK_COLOR } from "components/utils/hex2hsl"

interface JWTProps {
  organization: {
    slug: string
    id: string
  }
  owner: {
    id: string
  }
}

export const defaultSettings: InvalidCustomerSettings = {
  isValid: false,
  primaryColor: BLACK_COLOR,
  language: "en",
  logoUrl: undefined,
  favicon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`,
  companyName: "Commerce Layer",
  retryable: false
}

const makeInvalidSettings = (retryable?: boolean): InvalidCustomerSettings => ({
  ...defaultSettings,
  retryable: !!retryable,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = req.query.accessToken as string

  if (!accessToken) {
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  const { slug, customerId } = getInfoFromJwt(accessToken)

  let endpoint: string
  try {
    if (slug) {
      endpoint = `https://${slug}.${process.env.NEXT_PUBLIC_DOMAIN}`
    } else {
      return res.json({ validUserArea: false })
    }
  } catch (e) {
    console.log(`error decoding access token: ${e}`)
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  const domain = process.env.NEXT_PUBLIC_DOMAIN || "commercelayer.io"

  const client = CommerceLayer({
    organization: slug,
    accessToken,
    domain,
  })

  const [organizationResponse] = await Promise.all([
    getOrganizationsDetails({
      client,
    })
  ])

  const organization = organizationResponse?.object

  if (!customerId || !organization) {
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  const appSettings: CustomerSettings = {
    accessToken,
    endpoint,
    customerId,
    validUserArea: true,
    companyName: organization?.name || defaultSettings.companyName,
    language: defaultSettings.language,
    primaryColor: hex2hsl(organization?.primary_color as string) || defaultSettings.primaryColor,
    logoUrl: organization?.logo_url || defaultSettings.logoUrl,
    favicon: organization?.favicon_url || defaultSettings.favicon,
    gtmId: organization?.gtm_id,
  }
  res.statusCode = 200

  return res.json(appSettings)
}
