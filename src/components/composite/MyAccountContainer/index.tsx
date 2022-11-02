import { CommerceLayer } from "@commercelayer/react-components"
import { GlobalStylesProvider } from "@commercelayer/react-utils"
import type { Settings } from "HostedApp"
import { IconContext } from "phosphor-react"
import { GlobalStyles as BaseStyles } from "twin.macro"

import CustomerHeader from "src/components/composite/Header/Customer"
import GuestHeader from "src/components/composite/Header/Guest"
import { MyAccountHead } from "src/components/composite/MyAccountTitle"
import Navbar from "src/components/composite/Navbar"
import { LayoutDefault } from "src/components/layouts/LayoutDefault"
import Footer from "src/components/ui/Footer"
import PageMain from "src/components/ui/PageMain"

import { FooterWrapper } from "./styled"

import { AppProvider } from "src/providers/AppProvider"
import { CustomerContainerProvider } from "src/providers/CustomerContainerProvider"

type Props = {
  settings: Settings
}

const MyAccountContainer: React.FC<Props> = ({ settings, children }) => {
  return (
    <div>
      <MyAccountHead
        title={settings.companyName}
        faviconUrl={settings.faviconUrl}
      />
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
                      <FooterWrapper>
                        <Footer />
                      </FooterWrapper>
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
