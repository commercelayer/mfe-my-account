import { useTranslation } from "react-i18next"

import StatusChip from "src/components/ui/StatusChip"

export type OrderStatus =
  | "draft"
  | "pending"
  | "placed"
  | "approved"
  | "cancelled"

type Props = {
  status?: OrderStatus
}

const OrderStatusChip: React.FC<Props> = ({ status }) => {
  if (status === undefined) return null
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`orderStatus.${status}`) as string} />
  )
}

export default OrderStatusChip