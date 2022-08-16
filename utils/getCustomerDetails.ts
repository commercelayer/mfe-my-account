import { CommerceLayerClient } from "@commercelayer/sdk"
import { Settings } from "HostedApp"

import { retryCall } from "./retryCall"

type GetCustomerDetailsProps = Pick<Settings, "customerId"> & {
  client: CommerceLayerClient
}

export const getCustomerDetails = async ({
  client,
  customerId,
}: GetCustomerDetailsProps) =>
  retryCall(() => getAsyncCustomer(client, customerId))

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
