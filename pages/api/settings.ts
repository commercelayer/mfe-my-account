// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CommerceLayer from "@commercelayer/sdk"
import { getInfoFromJwt } from "utils/getInfoFromJwt"
import { getOrganizations } from "utils/getOrganizations"
import { getOrder } from "utils/getOrder"
import type { NextApiRequest, NextApiResponse } from "next"

const RETRIES = 2

function isProduction(env: string): boolean {
  return env === "production"
}

export const defaultSettings: InvalidCustomerSettings = {
  isValid: false,
  primaryColor: '#000000',
  language: "en",
  favicon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`,
  companyName: "Commerce Layer",
  retryable: false
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { NODE_ENV, NEXT_PUBLIC_DOMAIN, NEXT_PUBLIC_HOSTED } = process.env
  const accessToken = req.query.accessToken as string
  const orderId = req.query.orderId as string | undefined

  const domain = NEXT_PUBLIC_DOMAIN || "commercelayer.io"

  function invalidateUserArea(retry?: boolean) {
    res.statusCode = 200
    return res.json({ validUserArea: false, retryOnError: !!retry })
  }

  if (!accessToken) {
    return invalidateUserArea()
  }

  const subdomain = req.headers.host?.split(":")[0].split(".")[0]

  const { slug, kind, customerId, isTest } = getInfoFromJwt(accessToken)

  if (!slug) {
    return invalidateUserArea()
  }

  if (
    isProduction(NODE_ENV) &&
    !!NEXT_PUBLIC_HOSTED &&
    (subdomain !== slug || kind !== "sales_channel")
  ) {
    return invalidateUserArea()
  } else if (kind !== "sales_channel") {
    return invalidateUserArea()
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

  const organization = organizationResponse?.object

  if (!customerId || !organization) {
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  if (orderId) {
    const [orderResponse] = await Promise.all([
      getOrder({
        client,
        orderId
      })
    ])
  
    const order = orderResponse?.object
    if (!order) {
      res.statusCode = 200
      return res.json({ validUserArea: false, show404: true })
    }
  }

  const appSettings: CustomerSettings = {
    accessToken,
    endpoint: `https://${slug}.${domain}`,
    customerId,
    validUserArea: true,
    companyName: organization?.name || defaultSettings.companyName,
    language: defaultSettings.language,
    primaryColor: organization?.primary_color as string || defaultSettings.primaryColor,
    logoUrl: organization?.logo_url || '',
    favicon: organization?.favicon_url || defaultSettings.favicon,
    gtmId: isTest ? organization?.gtm_id_test : organization?.gtm_id,
  }

  return res
    .setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate")
    .status(200)
    .json(appSettings)
}
