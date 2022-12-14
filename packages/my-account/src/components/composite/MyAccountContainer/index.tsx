import { CommerceLayer } from "@commercelayer/react-components/auth/CommerceLayer"
import { GlobalStylesProvider } from "@commercelayer/react-utils"
import type { Settings } from "HostedApp"
import { IconContext } from "phosphor-react"
import { GlobalStyles as BaseStyles } from "twin.macro"

import CustomerHeader from "#components/composite/Header/Customer"
import GuestHeader from "#components/composite/Header/Guest"
import Navbar from "#components/composite/Navbar"
import { PageHead } from "#components/composite/PageHead"
import { LayoutDefault } from "#components/layouts/LayoutDefault"
import { FooterWrapper } from "#components/ui/Common/styled"
import Footer from "#components/ui/Footer"
import PageMain from "#components/ui/PageMain"
import { AppProvider } from "#providers/AppProvider"
import { CustomerContainerProvider } from "#providers/CustomerContainerProvider"

interface Props {
  settings: Settings
  children: React.ReactElement
}

function MyAccountContainer({ settings, children }: Props): JSX.Element {
  return (
    <>
      <PageHead
        title={`${settings.companyName} - My Account`}
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
    </>
  )
}

export default MyAccountContainer
