import { ShippingAddressContainer } from "@commercelayer/react-components"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import CustomerAddressFormNew from "components/composite/Address/CustomerAddressFormNew"
import { AddButton } from "components/ui/AddButton"
import CustomerAddressCard from "components/ui/CustomerAddressCard"
import { GridContainer } from "components/ui/GridContainer"
import Title from "components/ui/Title"

const Addresses = () => {
  const { t } = useTranslation()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const form = document.getElementById("customer-address-form")
    form &&
      (form.className =
        "transition ease-in duration-500 transform translate-y-0 opacity-100")
  }, [showForm])

  return (
    <ShippingAddressContainer>
      {showForm ? (
        <CustomerAddressFormNew onClose={() => setShowForm(false)} />
      ) : (
        <>
          <Title>{t("addresses.title")}</Title>
          <GridContainer className="mb-6">
            <CustomerAddressCard addressType="shipping" />
            <AddButton action={() => setShowForm(true)} />
          </GridContainer>
        </>
      )}
    </ShippingAddressContainer>
  )
}

export default Addresses
