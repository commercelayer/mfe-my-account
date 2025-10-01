import { useContext } from "react"
import { useTranslation } from "react-i18next"

import { AddressCard } from "#components/composite/AddressCard"
import { OrderContext } from "#providers/OrderProvider"

function AddressesSummary(): JSX.Element {
  const { t } = useTranslation()

  const ctx = useContext(OrderContext)
  const order = ctx?.order

  if (!order || !order?.billing_address || !order?.shipping_address)
    return <></>

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="md:w-1/2">
        <p className="uppercase text-gray-400 font-semibold text-xs mb-4">
          {t("order.addresses.billedTo")}
        </p>
        <AddressCard
          address={order?.billing_address}
          addressType="billing"
          readonly={true}
        />
      </div>
      <div className="md:w-1/2">
        <p className="uppercase text-gray-400 font-semibold text-xs mb-4">
          {t("order.addresses.shippedTo")}
        </p>
        <AddressCard
          address={order?.shipping_address}
          addressType="shipping"
          readonly={true}
        />
      </div>
    </div>
  )
}

export default AddressesSummary
