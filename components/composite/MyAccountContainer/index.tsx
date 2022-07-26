import { CommerceLayer } from "@commercelayer/react-components"
import { GlobalStylesProvider } from "@commercelayer/react-utils"
import { Settings } from "HostedApp"
import { GlobalStyles as BaseStyles } from "twin.macro"

import Header from "components/composite/Header"
import { MyAccountHead } from "components/composite/MyAccountTitle"
import Navbar from "components/composite/Navbar"
import { ActionsMenuProvider } from "components/data/ActionsMenuProvider"
import { AppProvider } from "components/data/AppProvider"
import { CustomerContainerProvider } from "components/data/CustomerContainerProvider"
import { LayoutDefault } from "components/layouts/LayoutDefault"
import Footer from "components/ui/Footer"
import PageMain from "components/ui/PageMain"

interface Props {
  settings: Settings
}

const MyAccountContainer: React.FC<Props> = ({ settings, children }) => {
  return (
    <div>
      <MyAccountHead title={settings.companyName} favicon={settings.favicon} />
      <CommerceLayer
        accessToken={settings.accessToken}
        endpoint={settings.endpoint}
      >
        <GlobalStylesProvider primaryColor={settings.primaryColor}>
          <BaseStyles />
          <AppProvider
            customerId={settings.customerId}
            accessToken={settings.accessToken}
            endpoint={settings.endpoint}
          >
            <ActionsMenuProvider>
              <CustomerContainerProvider isGuest={settings.isGuest}>
                <LayoutDefault
                  isGuest={settings.isGuest}
                  main={
                    <>
                      <Header
                        isGuest={settings.isGuest}
                        logoUrl={settings.logoUrl}
                        companyName={settings.companyName}
                      />
                      <PageMain>{children}</PageMain>
                      <Footer />
                    </>
                  }
                  aside={
                    settings.isGuest ? null : <Navbar settings={settings} />
                  }
                />
              </CustomerContainerProvider>
            </ActionsMenuProvider>
          </AppProvider>
        </GlobalStylesProvider>
      </CommerceLayer>
    </div>
  )
}

export default MyAccountContainer
