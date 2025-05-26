import { AddressesContainer } from "@commercelayer/react-components/addresses/AddressesContainer"
import { AddressesEmpty } from "@commercelayer/react-components/addresses/AddressesEmpty"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "wouter"

import Empty from "#components/composite/Empty"
import { AddButton } from "#components/ui/AddButton"
import CustomerAddressCard from "#components/ui/CustomerAddressCard"
import { GridContainer } from "#components/ui/GridContainer"
import Title from "#components/ui/Title"
import { appRoutes } from "#data/routes"
import { AppContext } from "#providers/AppProvider"
import { useSettings } from "#providers/SettingsProvider"

function AddressesPage(): JSX.Element {
  const { t } = useTranslation()
  const [, setLocation] = useLocation()
  const appCtx = useContext(AppContext)
  const { settings } = useSettings()

  return (
    <AddressesContainer>
      <Title>{t("addresses.title")}</Title>
      <AddressesEmpty>{() => <Empty type="Addresses" />}</AddressesEmpty>
      <GridContainer data-test-id="addresses-wrapper">
        <CustomerAddressCard />
      </GridContainer>
      <AddButton
        action={() => {
          setLocation(
            `${appRoutes.newAddress.makePath({
              accessToken: appCtx?.accessToken ?? '',
              lang: settings.language,
            })}`
          )
        }}
        testId="show-new-address"
      />
    </AddressesContainer>
  )
}

export default AddressesPage
