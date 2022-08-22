import { CommerceLayer } from "@commercelayer/react-components"
import { GlobalStylesProvider } from "@commercelayer/react-utils"
import { Settings } from "HostedApp"
import { IconContext } from "phosphor-react"
import { GlobalStyles as BaseStyles } from "twin.macro"

import CustomerHeader from "components/composite/Header/Customer"
import GuestHeader from "components/composite/Header/Guest"
import { MyAccountHead } from "components/composite/MyAccountTitle"
import Navbar from "components/composite/Navbar"
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
          <IconContext.Provider
            value={{
              size: 32,
              weight: "fill",
              mirrored: false,
            }}
          >
            <BaseStyles />
            <AppProvider
              customerId={settings.customerId}
              accessToken={settings.accessToken}
              endpoint={settings.endpoint}
            >
              <CustomerContainerProvider isGuest={settings.isGuest}>
                <LayoutDefault
                  isGuest={settings.isGuest}
                  main={
                    <>
                      {settings.isGuest ? (
                        <GuestHeader
                          logoUrl={settings.logoUrl}
                          companyName={settings.companyName}
                        />
                      ) : (
                        <CustomerHeader
                          logoUrl={settings.logoUrl}
                          companyName={settings.companyName}
                        />
                      )}
                      <PageMain>{children}</PageMain>
                      <Footer />
                    </>
                  }
                  aside={
                    settings.isGuest ? null : <Navbar settings={settings} />
                  }
                />
              </CustomerContainerProvider>
            </AppProvider>
          </IconContext.Provider>
        </GlobalStylesProvider>
      </CommerceLayer>
    </div>
  )
}

export default MyAccountContainer
