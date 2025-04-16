import { useTranslation } from "react-i18next"

import { Wrapper, SummaryWrapper } from "./styled"

import AddressesSummary from "#components/composite/Order/AddressesSummary"
import LineItemList from "#components/composite/Order/LineItemList"
import OrderPayments from "#components/composite/Order/OrderPayments"
import OrderSummary from "#components/composite/Order/OrderSummary"
import { OrderSection, OrderSectionItem } from "#components/ui/OrderSection"

function OrderSections(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <OrderSection>
        <OrderSectionItem
          index={1}
          header={<span>{t("order.summary.title")}</span>}
        >
          <SummaryWrapper>
            <LineItemList />
            <OrderSummary />
          </SummaryWrapper>
        </OrderSectionItem>
        <OrderSectionItem
          index={2}
          header={<span>{t("order.addresses.title")}</span>}
        >
          <AddressesSummary />
        </OrderSectionItem>
        <OrderSectionItem
          index={4}
          header={<span>{t("order.payments.title")}</span>}
        >
          <OrderPayments />
        </OrderSectionItem>
      </OrderSection>
    </Wrapper>
  )
}

export default OrderSections
