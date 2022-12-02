import type { Order } from "@commercelayer/sdk"
import { useTranslation } from "react-i18next"

import AddressesSummary from "#components/composite/Order/AddressesSummary"
import LineItemList from "#components/composite/Order/LineItemList"
import OrderPayments from "#components/composite/Order/OrderPayments"
import OrderShipments from "#components/composite/Order/OrderShipments"
import OrderSummary from "#components/composite/Order/OrderSummary"
import { OrderSection, OrderSectionItem } from "#components/ui/OrderSection"

import { Wrapper, SummaryWrapper } from "./styled"

interface Props {
  order?: Order
}

const OrderSections: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <OrderSection>
        <OrderSectionItem index={1} header={<span>{t("order.summary")}</span>}>
          <SummaryWrapper>
            <LineItemList />
            <OrderSummary />
          </SummaryWrapper>
        </OrderSectionItem>
        <OrderSectionItem
          index={2}
          header={<span>{t("order.addresses")}</span>}
        >
          <AddressesSummary order={order} />
        </OrderSectionItem>
        <OrderSectionItem
          index={3}
          header={<span>{t("order.shipments")}</span>}
        >
          <OrderShipments />
        </OrderSectionItem>
        <OrderSectionItem index={4} header={<span>{t("order.payments")}</span>}>
          <OrderPayments />
        </OrderSectionItem>
      </OrderSection>
    </Wrapper>
  )
}

export default OrderSections
