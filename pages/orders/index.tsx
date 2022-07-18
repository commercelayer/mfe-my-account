import { NextPage } from "next"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

import { RetryError } from "components/composite/RetryError"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import Orders from "components/composite/Orders"
import EmptyOrders from "components/composite/Orders/EmptyOrders"

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
      {/* <EmptyOrders settings={settings} /> */}
      <Orders settings={settings} />
    </DynamicAppContainer>
  )
}

export default OrderPage