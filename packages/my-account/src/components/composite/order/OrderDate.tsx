import { Trans } from "react-i18next"

import { formatDate, shortDate } from "#utils/dateTimeFormats"

interface Props {
  placed_at?: string | null
}

function OrderDate({ placed_at }: Props): JSX.Element {
  const orderPlacedAt =
    (placed_at != null && formatDate(placed_at, shortDate)) || ""

  return (
    <p className="block text-sm text-gray-500 capitalize">
      <Trans i18nKey="order.placed_at">{orderPlacedAt}</Trans>
    </p>
  )
}

export default OrderDate
