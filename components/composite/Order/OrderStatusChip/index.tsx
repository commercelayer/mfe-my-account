import { useTranslation } from "react-i18next"
import StatusChip from "components/ui/StatusChip"

interface Props {
  status: string
}

const OrderStatusChip: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`orderStatus.${status}`)} />
  )
}

export default OrderStatusChip