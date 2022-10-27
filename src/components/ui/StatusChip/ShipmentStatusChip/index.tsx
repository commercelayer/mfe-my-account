import { useTranslation } from "react-i18next"

import StatusChip from "src/components/ui/StatusChip"

export type ShipmentStatus =
  | "draft"
  | "upcoming"
  | "cancelled"
  | "on_hold"
  | "picking"
  | "packing"
  | "ready_to_ship"
  | "shipped"

type Props = {
  status?: ShipmentStatus
}

const ShipmentStatusChip: React.FC<Props> = ({ status }) => {
  if (status === undefined) return null
  const { t } = useTranslation()

  return (
    <StatusChip
      status={status}
      label={t(`shipmentStatus.${status}`) as string}
    />
  )
}

export default ShipmentStatusChip
