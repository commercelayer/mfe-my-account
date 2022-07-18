import { NextPage } from "next"
import dynamic from "next/dynamic"

import { RetryError } from "components/composite/RetryError"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import Returns from "components/composite/Returns"
import EmptyReturns from "components/composite/Returns/EmptyReturns"

const ReturnsPage: NextPage = () => {
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

  return (
    <DynamicAppContainer settings={settings}>
      {/* <Returns settings={settings} /> */}
      <EmptyReturns settings={settings} />
    </DynamicAppContainer>
  )
}

export default ReturnsPage