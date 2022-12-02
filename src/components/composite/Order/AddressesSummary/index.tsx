import { useContext } from "react"
import { useTranslation } from "react-i18next"

import { AddressCard } from "#components/ui/AddressCard"

import { AppContext } from "#providers/AppProvider"

import {
  Wrapper,
  AddressesTitle,
  BillingAddress,
  ShippingAddress,
} from "./styled"

const AddressesSummary: React.FC = () => {
  const { t } = useTranslation()

  const ctx = useContext(AppContext)
  const orderData = ctx?.orderData

  if (!orderData || !orderData?.billing_address || !orderData?.shipping_address) return null

  return (
    <Wrapper>
      <BillingAddress>
        <AddressesTitle>{t("order.addresses.billedTo")}</AddressesTitle>
        <AddressCard
          address={orderData?.billing_address}
          addressType="billing"
          readonly={true}
        />
      </BillingAddress>
      <ShippingAddress>
        <AddressesTitle>{t("order.addresses.shippedTo")}</AddressesTitle>
        <AddressCard
          address={orderData?.shipping_address}
          addressType="shipping"
          readonly={true}
        />
      </ShippingAddress>
    </Wrapper>
  )
}

export default AddressesSummary
