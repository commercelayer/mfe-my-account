import type { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "#utils/retryCall"

interface GetOrderSubscriptionConfig {
  /**
   * The signed Commerce Layer SDK client
   */
  client: CommerceLayerClient
  /**
   * The id of the Customer resource needed
   */
  customerId: string
  /**
   * The id of the OrderSubscription resource needed
   */
  orderSubscriptionId: string
}

/**
 * Retrieves the order subscription last order details by its id.
 *
 * @param config - `GetOrderSubscriptionConfig` object containing both sdk `client` and `orderId`
 *
 * @returns an object containing the resolved `OrderSubscription` and the status of async operation.
 */
export const getOrderSubscriptionLastOrder = async (
  config: GetOrderSubscriptionConfig
) => {
  const { client, customerId, orderSubscriptionId } = config
  return retryCall(() =>
    getAsyncOrderSubscriptionLastOrder(client, customerId, orderSubscriptionId)
  )
}

const getAsyncOrderSubscriptionLastOrder = async (
  client: GetOrderSubscriptionConfig["client"],
  customerId: GetOrderSubscriptionConfig["customerId"],
  orderSubscriptionId: GetOrderSubscriptionConfig["orderSubscriptionId"]
) => {
  const customerOrders = await client.customers.orders(customerId, {
    filters: { order_subscription_id_eq: orderSubscriptionId },
    include: [
      "authorizations",
      "shipping_address",
      "billing_address",
      "payment_method",
      "payment_source",
    ],
    sort: { created_at: "desc" },
    pageSize: 1,
    pageNumber: 1,
  })
  return customerOrders?.[0] != null ? customerOrders[0] : undefined
}
