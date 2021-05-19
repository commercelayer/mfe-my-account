import "../styles/globals.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "components/data/i18n"
import {LayoutDefault} from "components/layouts/LayoutDefault"
import Navbar from "components/composite/Navbar"


function UserArea(props: AppProps) {
  const { Component, pageProps } = props

  return (
  <LayoutDefault
    main={<Component {...pageProps} />}
    aside={<Navbar />}
  />
  )
}

export default appWithTranslation(UserArea)
