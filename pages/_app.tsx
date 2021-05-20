import "../styles/globals.css"

import "components/data/i18n"

import {
  CommerceLayer,
  CustomerContainer,
} from "@commercelayer/react-components"
import { appWithTranslation } from "next-i18next"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Navbar from "components/composite/Navbar"
import { AppProvider } from "components/data/AppProvider"
import { useSettingsOrInvalid } from "components/hooks/useSettingsOrInvalid"
import { LayoutDefault } from "components/layouts/LayoutDefault"
import { SpinnerLoader } from "components/ui/SpinnerLoader"

import type { AppProps } from "next/app"

interface GlobalStyleProps {
  primaryColor: string
  contrastColor: string
}
const GlobalCssStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    --primary: ${({ primaryColor }) => primaryColor};
    --contrast: ${({ contrastColor }) => contrastColor};
  }
`

function UserArea(props: AppProps) {
  const { Component, pageProps } = props

  const { t } = useTranslation()
  const { settings, isLoading } = useSettingsOrInvalid()

  if (isLoading) return <SpinnerLoader />
  if (!settings) return <></>

  return (
    <div>
      <Head>
        <title>{t("general.title")}</title>
        <link rel="icon" href={settings.favicon} />
      </Head>
      <CommerceLayer
        accessToken={settings.accessToken}
        endpoint={settings.endpoint}
      >
        <GlobalCssStyle
          primaryColor={settings.primaryColor}
          contrastColor={settings.contrastColor}
        />
        <ThemeProvider
          theme={{
            colors: {
              primary: settings.primaryColor,
              contrast: settings.contrastColor,
            },
          }}
        >
          <AppProvider
            customerId={settings.customerId}
            accessToken={settings.accessToken}
            endpoint={settings.endpoint}
          >
            <CustomerContainer>
              <LayoutDefault
                main={<Component {...pageProps} />}
                aside={<Navbar accessToken={settings.accessToken} />}
              />
            </CustomerContainer>
          </AppProvider>
        </ThemeProvider>
      </CommerceLayer>
    </div>
  )
}

export default appWithTranslation(UserArea)
