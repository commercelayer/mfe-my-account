// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CommerceLayer from "@commercelayer/sdk"
import { Settings, InvalidSettings } from "HostedApp"
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

export const defaultSettings: InvalidSettings = {
  isValid: false,
  primaryColor: "#000000",
  language: "en",
  favicon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`,
  companyName: "Commerce Layer",
  retryable: false
}

const makeInvalidSettings = (retryable?: boolean): InvalidSettings => ({
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
  if (!organization) {
    return makeInvalidSettings(!organizationResponse?.bailed)
  }

  if (!customerId || !organization) {
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  const appSettings: CustomerSettings = {
    accessToken,
    endpoint,
    customerId,
    validUserArea: true,
    logoUrl:
      organization?.logo_url ||
      "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
    companyName: organization?.name || "Test company",
    language: "en",
    primaryColor: hex2hsl(organization?.primary_color as string) || BLACK_COLOR,
    favicon: organization?.favicon_url || "/favicon.png",
    gtmId: organization?.gtm_id || "GTM-TGCQ5BM",
  }
  res.statusCode = 200

  return res.json(appSettings)
}
