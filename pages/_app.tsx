import "../styles/globals.css"

import "components/data/i18n"

import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"

import Header from "components/composite/Header"
import { useSettings } from "components/hooks/useSettings"
import Footer from "components/ui/Footer"

const DynamicSpinnerLoader = dynamic(
  () => import("components/ui/SpinnerLoader")
)
const DynamicInvalid = dynamic(() => import("components/composite/Invalid"))
const DynamicAppContainer = dynamic(
  () => import("components/composite/AppContainer")
)

function UserArea(props: AppProps) {
  const { Component, pageProps } = props
  const { settings, isLoading } = useSettings()

  if (isLoading) return <DynamicSpinnerLoader />
  if (!settings) return <DynamicInvalid />

  return (
    <DynamicAppContainer settings={settings}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </DynamicAppContainer>
  )
}

export default appWithTranslation(UserArea)
