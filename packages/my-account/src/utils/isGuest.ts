import { getAccessTokenFromUrl } from "#utils/getAccessTokenFromUrl"
import { getInfoFromJwt } from "#utils/getInfoFromJwt"

/**
 * Verifies if provided accessToken is not owned by a customer.
 *
 * @returns a boolean flag set as `true` in case accessToken is not owned by a customer.
 */
export const isGuest = () => {
  const accessToken = getAccessTokenFromUrl() as string
  const { customerId } = getInfoFromJwt(accessToken)
  if (customerId) return false
  return true
}
