import { jwtDecode, revoke, type RevokeReturn } from "@commercelayer/js-auth"

/**
 * Revoke the customer access token.
 * This function decodes the access token to extract the client ID
 * and then calls the revoke function from @commercelayer/js-auth.
 *
 * @param {string} token - The access token to be revoked.
 * @returns {Promise<RevokeReturn>} - A promise that resolves with the result of the revoke operation.
 */
export function revokeCustomerToken(token: string): Promise<RevokeReturn> {
  const decoded = jwtDecode(token)
  const clientId = decoded.payload.application.client_id
  return revoke({
    clientId,
    token,
  })
}
