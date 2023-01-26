import { useContext } from "react"
import { Trans } from "react-i18next"

import { OrderDateWrapper } from "./styled"

import { OrderContext } from "#providers/OrderProvider"
import { formatDate, shortDate } from "#utils/dateTimeFormats"

function OrderDate(): JSX.Element {
  const orderCtx = useContext(OrderContext)
  const order = orderCtx?.order

  const orderPlacedAt =
    (order?.placed_at && formatDate(order.placed_at, shortDate)) || ""

  return (
    <OrderDateWrapper>
      <Trans i18nKey="order.placed_at">{orderPlacedAt}</Trans>
    </OrderDateWrapper>
  )
}

export default OrderDate
