import "../styles/globals.css"

import "components/data/i18n"

import { useRouter } from "next/router"

import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import { RetryError } from "components/composite/RetryError"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"

const DynamicInvalid = dynamic(() => import("components/composite/Invalid"))

const DynamicAppContainer = dynamic(
  () => import("components/composite/MyAccountContainer"),
  {
    loading: function LoadingSkeleton() {
      return <MyAccountSkeleton settings={{} as CustomerSettings} />
    }
  }
)

function UserArea(props: AppProps) {
  const { Component, pageProps } = props
  const { settings, retryOnError, isLoading } = useSettingsOrInvalid()

  const router = useRouter()
  if (router.route == '/404') return <DynamicInvalid />

  if (isLoading || (!settings && !retryOnError)) return <MyAccountSkeleton settings={settings ? settings : {} as CustomerSettings} />

  if (!settings) {
    if (retryOnError) {
      return <RetryError />
    }
    return <RetryError />
  }

  return (
    <DynamicAppContainer settings={settings}>
      <Component {...pageProps} />
    </DynamicAppContainer>
  )
}

export default appWithTranslation(UserArea)
