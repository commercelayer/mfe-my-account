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
          address={order?.billing_address}
          addressType="billing"
          readonly={true}
        />
      </BillingAddress>
      <ShippingAddress>
        <AddressesTitle>{t("orderSummary.shippedTo")}</AddressesTitle>
        <AddressCard
          address={order?.shipping_address}
          addressType="shipping"
          readonly={true}
        />
      </ShippingAddress>
    </Wrapper>
  )
}

export default AddressesSummary
