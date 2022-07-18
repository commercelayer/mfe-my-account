import { NextPage } from "next"
import dynamic from "next/dynamic"

import { RetryError } from "components/composite/RetryError"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import Addresses from "components/composite/Addresses"
import EmptyAddresses from "components/composite/Addresses/EmptyAddresses"

const AddressesPage: NextPage = () => {
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
      <Addresses settings={settings} />
      {/* <EmptyAddresses settings={settings} /> */}
    </DynamicAppContainer>
  )
}

export default AddressesPage