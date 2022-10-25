import { useTranslation } from "react-i18next"

import StatusChip from "src/components/ui/StatusChip"

export type ReturnStatus =
  | "draft"
  | "requested"
  | "approved"
  | "cancelled"
  | "shipped"
  | "rejected"
  | "received"

type Props = {
  status?: ReturnStatus
}

const ReturnStatusChip: React.FC<Props> = ({ status }) => {
  if (status === undefined) return null
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`returnStatus.${status}`) as string} />
  )
}

export default ReturnStatusChip
