import { Order } from "@commercelayer/sdk"
import { useTranslation } from "react-i18next"

import { AddressCard } from "components/ui/AddressCard"

import {
  Wrapper,
  AddressesTitle,
  BillingAddress,
  ShippingAddress,
} from "./styled"

interface Props {
  order?: Order
}

const AddressesSummary: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()

  if (!order || !order?.billing_address || !order?.shipping_address) return null

  return (
    <Wrapper>
      <BillingAddress>
        <AddressesTitle>{t("orderSummary.billedTo")}</AddressesTitle>
        <AddressCard
          firstName={order?.billing_address?.first_name}
          lastName={order?.billing_address?.last_name}
          city={order?.billing_address?.city}
          line1={order?.billing_address?.line_1}
          line2={order?.billing_address?.line_2}
          zipCode={order?.billing_address?.zip_code}
          stateCode={order?.billing_address?.state_code}
          countryCode={order?.billing_address?.country_code}
          phone={order?.billing_address?.phone}
          addressType="billing"
          readonly={true}
        />
      </BillingAddress>
      <ShippingAddress>
        <AddressesTitle>{t("orderSummary.shippedTo")}</AddressesTitle>
        <AddressCard
          firstName={order?.shipping_address?.first_name}
          lastName={order?.shipping_address?.last_name}
          city={order?.shipping_address?.city}
          line1={order?.shipping_address?.line_1}
          line2={order?.shipping_address?.line_2}
          zipCode={order?.shipping_address?.zip_code}
          stateCode={order?.shipping_address?.state_code}
          countryCode={order?.shipping_address?.country_code}
          phone={order?.shipping_address?.phone}
          addressType="shipping"
          readonly={true}
        />
      </ShippingAddress>
    </Wrapper>
  )
}

export default AddressesSummary
