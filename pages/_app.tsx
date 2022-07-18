import "../styles/globals.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "components/data/i18n"

import { RetryError } from "components/composite/RetryError"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import dynamic from "next/dynamic"

function MyAccount(props: AppProps) {
  const { Component, pageProps } = props

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
      <Component {...pageProps} settings={settings} />
    </DynamicAppContainer>
  )
}

export default appWithTranslation(MyAccount)
