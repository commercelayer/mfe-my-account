import { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "./retryCall"

export const getOrder = async ({
  client,
  orderId
}: {
  client: CommerceLayerClient
  orderId: string
}) => retryCall(() => getAsyncOrder(client, orderId))

const getAsyncOrder = async (client: CommerceLayerClient, orderId: string) => {
  return await client.orders.retrieve(orderId, {
    fields: {
      orders: [
        "id",
        "autorefresh",
        "status",
        "number",
        "guest",
        "language_code"
      ]
    }
  })
}