import type { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "#utils/retryCall"

interface GetOrderSubscriptionConfig {
  /**
   * The signed Commerce Layer SDK client
   */
  client: CommerceLayerClient
  /**
   * The id of the OrderSubscription resource we want to fetch
   */
  orderSubscriptionId: string
}

/**
 * Retrieves the order subscription details by its id with auto-retries in case of network or timeout errors.
 *
 * @param config - `GetOrderSubscriptionConfig` object containing both sdk `client` and `orderId`
 *
 * @returns an object containing the resolved `OrderSubscription` and the status of async operation.
 */
export const getOrderSubscription = async (
  config: GetOrderSubscriptionConfig
) => {
  const { client, orderSubscriptionId } = config
  return retryCall(() => getAsyncOrderSubscription(client, orderSubscriptionId))
}

const getAsyncOrderSubscription = async (
  client: CommerceLayerClient,
  orderSubscriptionId: string
) => {
  return await client.order_subscriptions.retrieve(orderSubscriptionId, {
    fields: {
      order_subscriptions: [
        "id",
        "number",
        "status",
        "frequency",
        "starts_at",
        "next_run_at",
        "expires_at",
      ],
    },
    // },
    // include: ["shipping_address", "billing_address", "shipments"],
  })
}
