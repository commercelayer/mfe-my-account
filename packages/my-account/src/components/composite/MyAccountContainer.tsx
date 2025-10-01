import { CommerceLayer } from "@commercelayer/react-components/auth/CommerceLayer"
import type { Settings } from "HostedApp"
import { IconContext } from "phosphor-react"

import { InjectCssCustomProperties } from "#components/composite/InjectCssCustomProperties"
import Navbar from "#components/composite/Navbar"
import { PageHead } from "#components/composite/PageHead"
import { LayoutDefault } from "#components/layouts/LayoutDefault"
import Footer from "#components/ui/Footer"
import HeaderCustomer from "#components/ui/HeaderCustomer"
import HeaderGuest from "#components/ui/HeaderGuest"
import PageMain from "#components/ui/PageMain"
import { AppProvider } from "#providers/AppProvider"
import { CustomerContainerProvider } from "#providers/CustomerContainerProvider"

interface Props {
  settings: Settings
  children: React.ReactElement
  config: CommerceLayerAppConfig
}

function MyAccountContainer({
  settings,
  children,
  config,
}: Props): JSX.Element {
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
        <InjectCssCustomProperties primaryColor={settings.primaryColor} />        
        <IconContext.Provider
          value={{
            size: 32,
            weight: "fill",
            mirrored: false,
          }}
        >
          <AppProvider
            customerId={settings.customerId}
            accessToken={settings.accessToken}
            endpoint={settings.endpoint}
            domain={config.domain}
          >
            <CustomerContainerProvider isGuest={settings.isGuest}>
              <LayoutDefault
                isGuest={settings.isGuest}
                main={
                  <>
                    {settings.isGuest ? (
                      <HeaderGuest
                        logoUrl={settings.logoUrl}
                        companyName={settings.companyName}
                      />
                    ) : (
                      <HeaderCustomer
                        logoUrl={settings.logoUrl}
                        companyName={settings.companyName}
                      />
                    )}
                    <PageMain>{children}</PageMain>
                    <div className="absolute bottom-0 block lg:hidden pb-2">
                      <Footer />
                    </div>
                  </>
                }
                aside={
                  settings.isGuest ? null : <Navbar settings={settings} />
                }
              />
            </CustomerContainerProvider>
          </AppProvider>
        </IconContext.Provider>
      </CommerceLayer>
    </>
  )
}

export default MyAccountContainer
