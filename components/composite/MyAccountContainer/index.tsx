import {
  CommerceLayer,
  CustomerContainer,
} from "@commercelayer/react-components"

import { GlobalStylesProvider } from "@commercelayer/react-utils"
import { GlobalStyles as BaseStyles } from "twin.macro"

import { MyAccountHead } from "components/composite/MyAccountTitle"
import { AppProvider } from "components/data/AppProvider"
import Navbar from "components/composite/Navbar"
import { LayoutDefault } from "components/layouts/LayoutDefault"

interface Props {
  settings: CustomerSettings
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

export default MyAccountContainer
