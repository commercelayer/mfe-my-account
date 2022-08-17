import { CommerceLayerClient } from "@commercelayer/sdk"

import { retryCall } from "./retryCall"

export const removeAddress = async ({
  client,
  addressId,
}: {
  client: CommerceLayerClient
  addressId: string | undefined
}) => retryCall(() => removeAsyncAddress(client, addressId))

const removeAsyncAddress = async (
  client: CommerceLayerClient,
  addressId: string | undefined
) => {
  return addressId && (await client.addresses.delete(addressId))
}
