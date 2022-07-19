import { getAccessTokenFromUrl } from "./getAccessTokenFromUrl"
import { getInfoFromJwt } from "./getInfoFromJwt"

export const isGuest = () => {
  const accessToken = getAccessTokenFromUrl() as string
  const { customerId } = getInfoFromJwt(accessToken)
  if (!customerId) return true
  return false
}