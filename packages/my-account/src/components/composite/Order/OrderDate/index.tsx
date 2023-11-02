import { Trans } from "react-i18next"

import { OrderDateWrapper } from "./styled"

import { formatDate, shortDate } from "#utils/dateTimeFormats"

interface Props {
  placed_at?: string | null
}

function OrderDate({ placed_at }: Props): JSX.Element {
  const orderPlacedAt =
    (placed_at != null && formatDate(placed_at, shortDate)) || ""

  return (
    <OrderDateWrapper>
      <Trans i18nKey="order.placed_at">{orderPlacedAt}</Trans>
    </OrderDateWrapper>
  )
}

export default OrderDate
