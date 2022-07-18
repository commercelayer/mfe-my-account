import { AddressesContainer } from "@commercelayer/react-components"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Transition } from "@headlessui/react"
import CustomerAddressContext from "context/CustomerAddressContext"

import CustomerAddressForm from "components/composite/Address/CustomerAddressForm"
import { AddButton } from "components/ui/AddButton"
import CustomerAddressCard from "components/ui/CustomerAddressCard"
import { GridContainer } from "components/ui/GridContainer"

import Title from "components/ui/Title"

interface Props {
  settings: CustomerSettings
}

const Addresses: React.FC<Props> = ({settings}) => {
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