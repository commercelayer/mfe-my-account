import { useContext } from "react"
import { useTranslation } from "react-i18next"

import AddressesSummary from "#components/composite/order/AddressesSummary"
import LineItemList from "#components/composite/order/LineItemList"
import OrderPayments from "#components/composite/order/OrderPayments"
import OrderShipments from "#components/composite/order/OrderShipments"
import OrderSummary from "#components/composite/order/OrderSummary"
import { OrderSection, OrderSectionItem } from "#components/ui/OrderSection"
import { OrderContext } from "#providers/OrderProvider"

function OrderSections(): JSX.Element {
  const { t } = useTranslation()
  const orderCtx = useContext(OrderContext)

  return (
    <div className="mt-12">
      <OrderSection>
        <OrderSectionItem
          index={1}
          header={<span>{t("order.summary.title")}</span>}
        >
          <div>
            <LineItemList />
            <OrderSummary />
          </div>
        </OrderSectionItem>
        <OrderSectionItem
          index={2}
          header={<span>{t("order.addresses.title")}</span>}
        >
          <AddressesSummary />
        </OrderSectionItem>
        {(orderCtx?.order?.shipments ?? []).length > 0 && (
          <OrderSectionItem
            index={3}
            header={<span>{t("order.shipments.title")}</span>}
          >
            <OrderShipments />
          </OrderSectionItem>
        )}
        <OrderSectionItem
          index={4}
          header={<span>{t("order.payments.title")}</span>}
        >
          <OrderPayments />
        </OrderSectionItem>
      </OrderSection>
    </div>
  )
}

export default OrderSections
