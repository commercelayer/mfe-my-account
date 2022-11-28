import type { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "./retryCall"

interface GetOrderConfig {
  /**
   * The signed Commerce Layer SDK client
   */
  client: CommerceLayerClient
  /**
   * The id of the Order resource we want to fetch
   */
  orderId: string
}

/**
 * Retrieves the order details by its id with auto-retries in case of network or timeout errors.
 *
 * @param config - `GetOrderConfig` object containing both sdk `client` and `orderId`
 *
 * @returns an object containing the resolved `Order` and the status of async operation.
 */
export const getOrder = async (config: GetOrderConfig) => {
  const { client, orderId } = config
  return retryCall(() => getAsyncOrder(client, orderId))
}

const getAsyncOrder = async (client: CommerceLayerClient, orderId: string) => {
  return await client.orders.retrieve(orderId, {
    fields: {
      orders: [
        "id",
        "status",
        "number",
        "guest",
        "shipping_address",
        "billing_address",
      ],
    },
    include: ["shipping_address", "billing_address"],
  })
}
