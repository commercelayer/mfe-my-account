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
  primary: HSLProps
}

const GlobalCssStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
    --primary-h: ${({ primary }) => primary.h};
    --primary-s: ${({ primary }) => primary.s};
    --primary-l: ${({ primary }) => primary.l};
    --primary: hsl(var(--primary-h), var(--primary-s), var(--primary-l));
    --primary-light: hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1);
    --primary-dark: hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) * 0.5));
    --contrast-threshold: 50%;
    --switch: calc((var(--primary-l) - var(--contrast-threshold)) * -10000);
    --contrast: hsl(0, 0%, var(--switch));
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
        <GlobalCssStyle primary={settings.primaryColor} />
        <ThemeProvider
          theme={{
            colors: {
              primary: settings.primaryColor,
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
                aside={<Navbar settings={settings} />}
              />
            </CustomerContainer>
          </AppProvider>
        </ThemeProvider>
      </CommerceLayer>
    </div>
  )
}

export default AppContainer
