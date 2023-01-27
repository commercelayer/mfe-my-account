import { useTranslation } from "react-i18next"

import { StatusChipWrapper } from "#components/ui/StatusChip/styled"
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
    <StatusChipWrapper status={status}>
      {getStatusTranslations(status, t)}
    </StatusChipWrapper>
  )
}

export default ShipmentStatusChip
