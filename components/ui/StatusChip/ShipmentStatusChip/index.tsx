import { useTranslation } from "react-i18next"
import StatusChip from "components/ui/StatusChip"

interface Props {
  status: string
}

const ShipmentStatusChip: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`shipmentStatus.${status}`)} />
  )
}

export default ShipmentStatusChip