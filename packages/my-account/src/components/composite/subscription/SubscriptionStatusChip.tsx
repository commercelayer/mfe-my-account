import { useTranslation } from "react-i18next"

import { StatusChip } from "#components/ui/StatusChip"

export type SubscriptionStatus =
  | "draft"
  | "inactive"
  | "active"
  | "cancelled"
  | "running"

interface Props {
  status?: SubscriptionStatus
}

function SubscriptionStatusChip({ status }: Props): JSX.Element | null {
  const { t } = useTranslation()
  if (status === undefined) return null
  return (
    <StatusChip status={status}>
      {t(`subscriptionStatus.${status}`) as string}
    </StatusChip>
  )
}

export default SubscriptionStatusChip
