import { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "./retryCall"

export const getCustomerDetails = async ({
  client,
  customerId,
}: {
  client: CommerceLayerClient
  customerId: string
}) => retryCall(() => getAsyncCustomer(client, customerId))

const getAsyncCustomer = async (client: CommerceLayerClient, customerId: string) => {
  return await client.customers.retrieve(customerId, {
    fields: {
      customers: [
        "email",
        "has_password"
      ],
    },
  })
}
