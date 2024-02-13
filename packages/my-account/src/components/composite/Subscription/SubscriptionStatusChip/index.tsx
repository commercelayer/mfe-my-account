import { useTranslation } from "react-i18next"

import { StatusChipWrapper } from "#components/ui/StatusChip/styled"

export type SubscriptionStatus =
  | "draft"
  | "inactive"
  | "active"
  | "cancelled"

interface Props {
  status?: SubscriptionStatus
}

function SubscriptionStatusChip({ status }: Props): JSX.Element {
  const { t } = useTranslation()
  if (status === undefined) return <></>
  return (
    <StatusChipWrapper status={status}>
      {t(`subscriptionStatus.${status}`) as string}
    </StatusChipWrapper>
  )
}

export default SubscriptionStatusChip
