import { AddressesContainer } from "@commercelayer/react-components"
import { Transition } from "@headlessui/react"
import CustomerAddressContext from "context/CustomerAddressContext"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import CustomerAddressFormNew from "components/composite/Address/CustomerAddressFormNew"
import { AddButton } from "components/ui/AddButton"
import CustomerAddressCard from "components/ui/CustomerAddressCard"
import { GridContainer } from "components/ui/GridContainer"
import Title from "components/ui/Title"

const Addresses = () => {
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
          <GridContainer>
            <CustomerAddressCard />
          </GridContainer>
          <AddButton
            action={() => {
              setShowAddressForm(true)
              setAddress({})
            }}
          />
        </Transition>
        <Transition show={showAddressForm} {...formTransition}>
          <CustomerAddressFormNew onClose={() => setShowAddressForm(false)} />
        </Transition>
      </AddressesContainer>
    </CustomerAddressContext.Provider>
  )
}

export default Addresses

const addressesTransition = {
  enter: "transition easy-out duration-500",
  enterFrom: "transform opacity-0",
  enterTo: "transform opacity-100",
}

const formTransition = {
  enter: "transition easy-out duration-700",
  enterFrom: "transform opacity-0 translate-y-14",
  enterTo: "transform opacity-100 translate-y-0",
}
