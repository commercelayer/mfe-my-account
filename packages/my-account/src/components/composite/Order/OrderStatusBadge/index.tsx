import { useContext } from "react"

import type { OrderStatus } from "#components/ui/StatusChip/OrderStatusChip"
import OrderStatusChip from "#components/ui/StatusChip/OrderStatusChip"
import { OrderContext } from "#providers/OrderProvider"

function OrderStatusBadge(): JSX.Element {
  const orderCtx = useContext(OrderContext)
  const order = orderCtx?.order

  const orderStatus = order ? (order.status as OrderStatus) : "placed"

  return <OrderStatusChip status={orderStatus} />
}

export default OrderStatusBadge
