import { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "./retryCall"

type GetOrganizationsConfig = {
  /**
   * The signed Commerce Layer SDK client
   */
  client: CommerceLayerClient
}

/**
 * Retrieves the organization info with auto-retries in case of network or timeout errors.
 *
 * @param config - the `GetOrganizationsConfig` object containing the signed sdk `client`
 * @returns an object containing the resolved `Organization` and the status of async operation.
 */

export const getOrganizations = async ({ client }: GetOrganizationsConfig) =>
  retryCall(() => getAsyncOrganization(client))

const getAsyncOrganization = async (client: CommerceLayerClient) => {
  return await client.organization.retrieve({
    fields: {
      organizations: [
        "id",
        "logo_url",
        "name",
        "primary_color",
        "favicon_url",
        "gtm_id",
        "gtm_id_test",
        "support_email",
        "support_phone",
      ],
    },
  })
}
