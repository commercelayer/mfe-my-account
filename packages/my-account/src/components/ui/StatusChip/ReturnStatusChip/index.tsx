import { useTranslation } from "react-i18next"

import StatusChip from "#components/ui/StatusChip"

export type ReturnStatus =
  | "draft"
  | "requested"
  | "approved"
  | "cancelled"
  | "shipped"
  | "rejected"
  | "received"

interface Props {
  status?: ReturnStatus
}

function ReturnStatusChip({ status }: Props): JSX.Element {
  if (status === undefined) return <></>
  const { t } = useTranslation()

  return (
    <StatusChip status={status} label={t(`returnStatus.${status}`) as string} />
  )
}

export default ReturnStatusChip
