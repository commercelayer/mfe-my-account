import { Order } from "@commercelayer/sdk"
import { useTranslation } from "react-i18next"

import AddressesSummary from "src/components/composite/Order/AddressesSummary"
import LineItemList from "src/components/composite/Order/LineItemList"
import OrderPayments from "src/components/composite/Order/OrderPayments"
import OrderShipments from "src/components/composite/Order/OrderShipments"
import OrderSummary from "src/components/composite/Order/OrderSummary"
import { OrderSection, OrderSectionItem } from "src/components/ui/OrderSection"

import { Wrapper, SummaryWrapper } from "./styled"

type Props = {
  order?: Order
}

const OrderOrderSection: React.FC<Props> = ({ order }) => {
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

export default OrderOrderSection
