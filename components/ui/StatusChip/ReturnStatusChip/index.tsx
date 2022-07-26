import { useTranslation } from "react-i18next"

import StatusChip from "components/ui/StatusChip"

export type ReturnStatus =
  | "draft"
  | "requested"
  | "approved"
  | "cancelled"
  | "shipped"
  | "rejected"
  | "received"

interface Props {
  status: ReturnStatus
}

const ReturnStatusChip: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`returnStatus.${status}`) as string} />
  )
}

export default ReturnStatusChip
