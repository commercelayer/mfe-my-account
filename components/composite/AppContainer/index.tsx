import {
  CommerceLayer,
  CustomerContainer,
} from "@commercelayer/react-components"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Navbar from "components/composite/Navbar"
import { AppProvider } from "components/data/AppProvider"
import { LayoutDefault } from "components/layouts/LayoutDefault"

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
                main={children}
                aside={<Navbar accessToken={settings.accessToken} />}
              />
            </CustomerContainer>
          </AppProvider>
        </ThemeProvider>
      </CommerceLayer>
    </div>
  )
}

export default AppContainer
