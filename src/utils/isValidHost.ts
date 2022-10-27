import { getInfoFromJwt } from "./getInfoFromJwt"

/**
 * Gets the subdomain from a full hostname
 *
 * @param hostname - Example: "my-org.commercelayer.app"
 * @returns the last level of subdomain found. Example `my-org`
 */
export const makeSubdomain = (hostname: string) => {
  return hostname?.split(":")[0].split(".")[0]
}

const isProduction = (forceProductionEnv?: boolean) =>
  forceProductionEnv ? true : process.env.NODE_ENV === "production"

const isCommerceLayerHosted = () => process.env.NEXT_PUBLIC_HOSTED === "true"

/**
 * Verifies if application is loaded from a valid URL and the `slug` found in JWT belongs
 * to the authorized subdomain.
 *
 * @param hostname - The full `window.location.hostname` Example: "my-org.commercelayer.app"
 * @param accessToken - The JWT used to authenticate Commerce Layer Api requests
 * @param forceProductionEnv - To be used to emulate production deployment during E2E tests
 *
 * @returns a boolean flag set as `true` in case app is loaded from a valid URL.
 */
export const isValidHost = (
  hostname: string,
  accessToken: string,
  forceProductionEnv?: boolean
) => {
  const { slug, kind } = getInfoFromJwt(accessToken)

  const isInvalidChannel = kind !== "sales_channel"
  if (isInvalidChannel) {
    return false
  }

  /**
   * When the application is not hosted by Commerce Layer we can't rely on subdomain
   * to match organization slug so we require to fill `NEXT_PUBLIC_SLUG` env variable
   */
  const subdomain = isCommerceLayerHosted()
    ? makeSubdomain(hostname)
    : process.env.NEXT_PUBLIC_SLUG

  const isInvalidSubdomain = subdomain !== slug
  if (isProduction(forceProductionEnv) && isInvalidSubdomain) {
    return false
  }

  return true
}
