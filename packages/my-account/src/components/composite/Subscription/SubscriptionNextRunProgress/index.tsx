import { OrderSubscription } from "@commercelayer/sdk"
import { formatDistanceStrict, formatDistanceToNowStrict } from "date-fns"
import { useTranslation } from "react-i18next"

import { ProgressTitle, type ProgressTitleVariant } from "./styled"

interface Props {
  subscription: OrderSubscription
  variant: ProgressTitleVariant
}

function getProgressMax(subscription: OrderSubscription) {
  const distance = formatDistanceStrict(
    new Date(subscription.next_run_at as string),
    new Date(subscription.last_run_at as string),
    { unit: "minute" }
  )
  return parseInt(distance.split(" ")[0]) ?? 0
}

function getProgressValue(subscription: OrderSubscription) {
  const distance = formatDistanceStrict(
    new Date(subscription.next_run_at as string),
    new Date(),
    { unit: "minute" }
  )
  return parseInt(distance.split(" ")[0]) ?? 0
}

function getProgressTitle(subscription: OrderSubscription) {
  const { t } = useTranslation()
  if (subscription.status === "active") {
    const distance = formatDistanceToNowStrict(
      new Date(subscription.next_run_at as string)
    )
    return `${t("subscriptionProgress.prefix")} ${distance}`
  } else {
    return t("subscriptionProgress.notRunning")
  }
}

function SubscriptionNextRunProgress({
  subscription,
  variant,
}: Props): JSX.Element {
  const max = getProgressMax(subscription)
  const value = getProgressValue(subscription)
  const remaining = value < max ? value : 0

  return (
    <>
      <ProgressTitle variant={variant}>
        {getProgressTitle(subscription)}
      </ProgressTitle>
      <progress className={"progress"} max={max} value={remaining} />
    </>
  )
}

export default SubscriptionNextRunProgress
