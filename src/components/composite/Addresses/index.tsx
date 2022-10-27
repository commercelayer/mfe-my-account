import {
  AddressesContainer,
  AddressesEmpty,
} from "@commercelayer/react-components"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import CustomerAddressForm from "src/components/composite/Address/CustomerAddressForm"
import Empty from "src/components/composite/Empty"
import { AddButton } from "src/components/ui/AddButton"
import CustomerAddressCard from "src/components/ui/CustomerAddressCard"
import { GridContainer } from "src/components/ui/GridContainer"
import Title from "src/components/ui/Title"

import CustomerAddressContext from "src/context/CustomerAddressContext"

const Addresses: React.FC = () => {
  const { t } = useTranslation()
  const [showAddressForm, setShowAddressForm] = useState(false)
  const [address, setAddress] = useState<any>({})

  return (
    <CustomerAddressContext.Provider
      value={{ address, setAddress, setShowAddressForm }}
    >
      <AddressesContainer>
        <Transition show={!showAddressForm} {...addressesTransition}>
          <Title>{t("addresses.title")}</Title>
          <AddressesEmpty>{() => <Empty type="Addresses" />}</AddressesEmpty>
          <GridContainer data-test-id="addresses-wrapper">
            <CustomerAddressCard />
          </GridContainer>
          <AddButton
            action={() => {
              setShowAddressForm(true)
              setAddress({})
            }}
            testId="show-new-address"
          />
        </Transition>
        <Transition show={showAddressForm} {...formTransition}>
          <CustomerAddressForm onClose={() => setShowAddressForm(false)} />
        </Transition>
      </AddressesContainer>
    </CustomerAddressContext.Provider>
  )
}

export default Addresses

const addressesTransition = {
  enter: "transition easy-out duration-500",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
}

const formTransition = {
  enter: "transition easy-out duration-700",
  enterFrom: "opacity-0 translate-y-14",
  enterTo: "opacity-100 translate-y-0",
}
