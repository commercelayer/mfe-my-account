import { AddressesContainer } from "@commercelayer/react-components"
import CustomerAddressContext from "context/CustomerAddressContext"
import { useEffect, useState } from "react"
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

  useEffect(() => {
    const form = document.getElementById("customer-address-form")
    form &&
      (form.className =
        "transition ease-in duration-500 transform translate-y-0 opacity-100")
  }, [showAddressForm])

  return (
    <CustomerAddressContext.Provider
      value={{ address, setAddress, setShowAddressForm }}
    >
      <AddressesContainer>
        {showAddressForm ? (
          <CustomerAddressFormNew onClose={() => setShowAddressForm(false)} />
        ) : (
          <>
            <Title>{t("addresses.title")}</Title>
            <GridContainer className="mb-6">
              <CustomerAddressCard />
            </GridContainer>
            <AddButton
              action={() => {
                setShowAddressForm(true)
                setAddress({})
              }}
            />
          </>
        )}
      </AddressesContainer>
    </CustomerAddressContext.Provider>
  )
}

export default Addresses
