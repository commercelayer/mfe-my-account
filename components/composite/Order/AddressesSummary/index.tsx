import { ShippingAddressContainer } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import CustomerAddressCard from "components/ui/CustomerAddressCard"

import {
  Wrapper,
  AddressesTitle,
  BillingAddress,
  ShippingAddress,
} from "./styled"

const AddressesSummary: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <ShippingAddressContainer>
        <BillingAddress>
          <AddressesTitle>{t("orderSummary.billedTo")}</AddressesTitle>
          <CustomerAddressCard showActions={false} />
        </BillingAddress>
        <ShippingAddress>
          <AddressesTitle>{t("orderSummary.shippedTo")}</AddressesTitle>
          <CustomerAddressCard showActions={false} />
        </ShippingAddress>
      </ShippingAddressContainer>
    </Wrapper>
  )
}

export default AddressesSummary
