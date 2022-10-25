import "src/styles/globals.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "src/utils/i18n"
import { useRouter } from "next/router"

import Invalid from "src/components/composite/Invalid"
import MyAccountContainer from "src/components/composite/MyAccountContainer"
import Skeleton from "src/components/composite/Skeleton"

import { SettingsProvider } from "src/providers/SettingsProvider"

function MyAccount(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()
  const orderId = router.query.orderId as string

  if (router.pathname !== "/404") {
    return (
      <SettingsProvider orderId={orderId}>
        {({ settings, isLoading }) => {
          return isLoading ? (
            <Skeleton />
          ) : !settings.isValid ? (
            <Invalid />
          ) : (
            <MyAccountContainer settings={settings}>
              <Component {...pageProps} settings={settings} />
            </MyAccountContainer>
          )
        }}
      </SettingsProvider>
    )
  } else {
    return <Component {...pageProps} />
  }
}

export default appWithTranslation(MyAccount)
