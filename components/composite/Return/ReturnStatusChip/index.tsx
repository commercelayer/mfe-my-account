import { useTranslation } from "react-i18next"
import StatusChip from "components/ui/StatusChip"

interface Props {
  status: string
}

const ReturnStatusChip: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`returnStatus.${status}`)} />
  )
}

export default ReturnStatusChip