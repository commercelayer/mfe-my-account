import { useTranslation } from "react-i18next"

import { StatusChipWrapper } from "#components/ui/StatusChip/styled"

export type OrderStatus =
  | "draft"
  | "pending"
  | "placed"
  | "approved"
  | "cancelled"
  | "editing"
  | "inactive"
  | "active"

interface Props {
  status?: OrderStatus
}

function OrderStatusChip({ status }: Props): JSX.Element {
  const { t } = useTranslation()
  if (status === undefined) return <></>
  return (
    <StatusChipWrapper status={status}>
      {t(`orderStatus.${status}`) as string}
    </StatusChipWrapper>
  )
}

export default OrderStatusChip
