import { GlobalStylesProvider } from "@commercelayer/react-utils"
import {
  CommerceLayer,
  CustomerContainer,
} from "@commercelayer/react-components"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { GlobalStyles as BaseStyles } from "twin.macro"

import Navbar from "components/composite/Navbar"
import { AppProvider } from "components/data/AppProvider"
import { LayoutDefault } from "components/layouts/LayoutDefault"

interface Props {
  settings: CustomerSettings
}

const AppContainer: React.FC<Props> = ({ settings, children }) => {
  const { t } = useTranslation()

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
        <BaseStyles />
        <GlobalStylesProvider primaryColor={settings.primaryColor}>
          <AppProvider
            customerId={settings.customerId}
            accessToken={settings.accessToken}
            endpoint={settings.endpoint}
          >
            <CustomerContainer>
              <LayoutDefault
                main={children}
                aside={<Navbar settings={settings} />}
                settings={settings}
              />
            </CustomerContainer>
          </AppProvider>
        </GlobalStylesProvider>
      </CommerceLayer>
    </div>
  )
}

export default AppContainer
