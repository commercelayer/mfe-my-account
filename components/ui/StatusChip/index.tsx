import { StatusChipWrapper } from "./styled"

interface Props {
  status: string
  label: string
}

const StatusChip: React.FC<Props> = ({ status, label }) => {
  return <StatusChipWrapper status={status}>{label}</StatusChipWrapper>
}

export default StatusChip
