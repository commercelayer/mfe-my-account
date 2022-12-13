import { useTranslation } from "react-i18next"

import StatusChip from "#components/ui/StatusChip"

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
  if (status === undefined) return <></>
  const { t } = useTranslation()

  return (
    <StatusChip
      status={status}
      label={t(`shipmentStatus.${status}`) as string}
    />
  )
}

export default ShipmentStatusChip
