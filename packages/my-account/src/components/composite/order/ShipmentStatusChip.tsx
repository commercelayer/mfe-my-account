import { useTranslation } from "react-i18next"

import { StatusChip } from "#components/ui/StatusChip"
import { getStatusTranslations } from "#utils/shipments"

export type ShipmentStatus =
  | "draft"
  | "upcoming"
  | "cancelled"
  | "on_hold"
  | "picking"
  | "packing"
  | "ready_to_ship"
  | "shipped"

interface Props {
  status?: ShipmentStatus
}

function ShipmentStatusChip({ status }: Props): JSX.Element {
  const { t } = useTranslation()
  if (status === undefined) return <></>
  return (
    <StatusChip status={status}>
      {getStatusTranslations(status, t)}
    </StatusChip>
  )
}

export default ShipmentStatusChip
