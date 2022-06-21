import "../styles/globals.css"

import "components/data/i18n"

import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"

import MyAccountSkeleton from "components/composite/MyAccountSkeleton"

import { useSettings } from "components/hooks/useSettings"

const DynamicSpinnerLoader = dynamic(
  () => import("components/ui/SpinnerLoader")
)
const DynamicInvalid = dynamic(() => import("components/composite/Invalid"))
const DynamicAppContainer = dynamic(
  () => import("components/composite/MyAccountContainer"),
  {
    loading: function LoadingSkeleton() {
      const settings = {} as CustomerSettings
      return <MyAccountSkeleton settings={settings} />
    }
  }
)

function UserArea(props: AppProps) {
  const { Component, pageProps } = props
  const { settings } = useSettings()

  if (!settings) return <DynamicInvalid />

  return (
    <DynamicAppContainer settings={settings}>
      <Component {...pageProps} />
    </DynamicAppContainer>
  )
}

export default appWithTranslation(UserArea)
