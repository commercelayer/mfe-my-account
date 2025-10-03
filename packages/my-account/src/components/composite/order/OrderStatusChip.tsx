import { useTranslation } from "react-i18next"

import { StatusChip } from "#components/ui/StatusChip"

export type OrderStatus =
  | "draft"
  | "pending"
  | "placed"
  | "approved"
  | "cancelled"
  | "editing"
  | "inactive"
  | "active"
  | "placing"
  | "running"

interface Props {
  status?: OrderStatus
}

function OrderStatusChip({ status }: Props): JSX.Element {
  const { t } = useTranslation()
  if (status === undefined) return <></>
  return (
    <StatusChip status={status}>
      {t(`orderStatus.${status}`) as string}
    </StatusChip>
  )
}

export default OrderStatusChip
