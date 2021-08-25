import { useTranslation } from "react-i18next"

import AddressesSummary from "components/composite/Order/AddressesSummary"
import LineItemList from "components/composite/Order/LineItemList"
import PaymentSummary from "components/composite/Order/PaymentSummary"
import Title from "components/ui/Title"

import { Wrapper } from "./styled"

const OrderSummary: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Title>{t("order.summary")}</Title>
      <LineItemList />
      <PaymentSummary />
      <AddressesSummary />
    </Wrapper>
  )
}

export default OrderSummary
