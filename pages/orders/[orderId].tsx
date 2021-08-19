import { OrderContainer, OrderNumber } from "@commercelayer/react-components"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import OrderSummary from "components/composite/Order/SummarySection"
import Title from "components/ui/Title"

const Order: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const orderId = query.orderId as string

  const { t } = useTranslation()

  return (
    <OrderContainer orderId={orderId}>
      <Title>
        {t("order.title")} #<OrderNumber />
      </Title>
      <Wrapper>
        <OrderSummary />
      </Wrapper>
    </OrderContainer>
  )
}

export default Order

export const Wrapper = styled.div`
  ${tw`bg-contrast px-5 w-full md:(px-0)`}
`
