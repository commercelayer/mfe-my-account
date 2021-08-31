import { ShippingAddressContainer } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import CustomerAddressCard from "components/ui/CustomerAddressCard"
import { GridContainer } from "components/ui/GridContainer"
import Title from "components/ui/Title"

const Addresses = () => {
  const { t } = useTranslation()

  return (
    <ShippingAddressContainer>
      <Title>{t("addresses.title")}</Title>
      <GridContainer className="mb-6">
        <CustomerAddressCard addressType="shipping" />
      </GridContainer>
    </ShippingAddressContainer>
  )
}

export default Addresses
