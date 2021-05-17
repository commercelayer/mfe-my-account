import "../styles/globals.css"
import { appWithTranslation } from "next-i18next"
import "components/data/i18n"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
