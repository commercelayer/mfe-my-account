import "../styles/globals.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "components/data/i18n"
import { useRouter } from "next/router"

import MyAccountContainer from "components/composite/MyAccountContainer"
import Invalid from "components/composite/Invalid"
import MyAccountSkeleton from "components/composite/MyAccountSkeleton"
import MyAccountSkeletonGuest from "components/composite/MyAccountSkeleton/Guest"

import { isGuest } from "utils/isGuest"

import { SettingsProvider } from "components/data/SettingsProvider"

function MyAccount(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()
  const orderId = router.query.orderId as string

  if (router.pathname !== '/404') {
    return (
      <SettingsProvider orderId={orderId}>
        {({ settings, isLoading }) => {
          return isLoading && isGuest() ? (
            <MyAccountSkeletonGuest />
          ) : isLoading && !isGuest() ? ( 
            <MyAccountSkeleton />
          ) : !settings.validUserArea ? (
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
