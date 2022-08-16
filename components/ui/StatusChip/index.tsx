import { OrderStatus } from "./OrderStatusChip"
import { ReturnStatus } from "./ReturnStatusChip"
import { ShipmentStatus } from "./ShipmentStatusChip"
import { StatusChipWrapper } from "./styled"

interface Props {
  status: OrderStatus | ReturnStatus | ShipmentStatus
  label: string
}

const StatusChip: React.FC<Props> = ({ status, label }) => {
  return <StatusChipWrapper status={status}>{label}</StatusChipWrapper>
}

export default StatusChip
