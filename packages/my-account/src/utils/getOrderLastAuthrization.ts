import { Order } from "@commercelayer/sdk"

export const getOrderLastAuthorization = (order: Order) => {
  return order.authorizations != null && order.authorizations?.length > 0
    ? order.authorizations[order.authorizations.length - 1]
    : undefined
}
