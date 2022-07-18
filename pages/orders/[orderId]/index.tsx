import { NextPage } from "next"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

import { RetryError } from "components/composite/RetryError"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import Order from "components/composite/Order"

const OrderPage: NextPage = () => {
  const DynamicInvalid = dynamic(() => import("components/composite/Invalid"))

  const DynamicAppContainer = dynamic(
    () => import("components/composite/MyAccountContainer"),
    {
      loading: function LoadingSkeleton() {
        return <MyAccountSkeleton />
      }
    }
  )

  const { settings, retryOnError, isLoading } = useSettingsOrInvalid()
  if (isLoading) return <MyAccountSkeleton />
  if (!isLoading && !settings) return <DynamicInvalid />
  if (!settings || retryOnError) return <RetryError />

  const { query } = useRouter()
  const orderId = query.orderId as string

  return (
    <DynamicAppContainer settings={settings}>
      <Order settings={settings} orderId={orderId} />
    </DynamicAppContainer>
  )
}

export default OrderPage