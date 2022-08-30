import { CommerceLayerClient } from "@commercelayer/sdk"

export const fetchParcel = async (
  cl: CommerceLayerClient,
  parcelId: string
) => {
  return cl.parcels.retrieve(parcelId, {
    fields: {
      parcels: ["id", "tracking_number", "tracking_details"],
    },
  })
}
