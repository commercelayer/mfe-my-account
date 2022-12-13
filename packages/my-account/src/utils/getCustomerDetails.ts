import type { CommerceLayerClient } from "@commercelayer/sdk"
import type { Settings } from "HostedApp"

import { retryCall } from "./retryCall"

type GetCustomerDetailsConfig = Pick<Settings, "customerId"> & {
  client: CommerceLayerClient
}

/**
 * Retrieves the customer details by its id with auto-retries in case of network or timeout errors.
 *
 * @param config - `GetCustomerDetailsConfig` object containing both sdk `client` and `customerId`
 *
 * @returns an object containing the resolved `Customer` and the status of async operation.
 */
export const getCustomerDetails = async (config: GetCustomerDetailsConfig) => {
  const { client, customerId } = config
  return retryCall(() => getAsyncCustomer(client, customerId))
}

const getAsyncCustomer = async (
  client: CommerceLayerClient,
  customerId: string
) => {
  return await client.customers.retrieve(customerId, {
    fields: {
      customers: ["email", "has_password"],
    },
  })
}
