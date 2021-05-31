// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CLayer, { Organization } from "@commercelayer/js-sdk"
import jwt_decode from "jwt-decode"
import type { NextApiRequest, NextApiResponse } from "next"

interface JWTProps {
  organization: {
    slug: string
    id: string
  }
  owner: {
    id: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = req.query.accessToken as string

  if (!accessToken) {
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  let endpoint: string
  try {
    const slug = (jwt_decode(accessToken) as JWTProps).organization.slug
    if (slug) {
      endpoint = `https://${slug}.${process.env.NEXT_PUBLIC_CLAYER_HOSTNAME}`
    } else {
      endpoint = process.env.NEXT_PUBLIC_CLAYER_DOMAIN
    }
  } catch (e) {
    console.log(`error decoding access token: ${e}`)
    res.statusCode = 200
    return res.json({ validUserArea: false })
  }

  CLayer.init({
    accessToken,
    endpoint,
  })

  let customerId = ""
  try {
    customerId = (jwt_decode(accessToken) as JWTProps).owner.id
  } catch (e) {
    console.log("error on decoding token:")
    console.log(e)
    console.log("access token:")
    console.log(accessToken)
    console.log("customerId")
    console.log(customerId)
    console.log("endpoint")
    console.log(endpoint)
  }

  let organization
  try {
    organization = await Organization.all()
  } catch (e) {
    console.log("error on retrieving organization:")
    console.log(e)
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
      organization?.logoUrl ||
      "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
    companyName: organization?.name || "Test company",
    language: "en",
    primaryColor: organization?.primaryColor || "#000000",
    contrastColor: organization?.contrastColor || "#ffffff",
    favicon: organization?.faviconUrl || "/favicon.png",
    gtmId: organization?.gtmId || "GTM-TGCQ5BM",
  }
  res.statusCode = 200

  return res.json(appSettings)
}
