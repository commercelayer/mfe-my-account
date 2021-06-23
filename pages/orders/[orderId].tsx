import { OrderContainer } from "@commercelayer/react-components"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import LineItemList from "components/composite/Order/LineItemList"
import OrderSummary from "components/composite/Order/OrderSummary"

const Order: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const orderId = query.orderId as string

  const { t } = useTranslation()

  return (
    <OrderContainer orderId={orderId}>
      <Title>{t("orders.order.title")}</Title>
      <OrderSummary />
    </OrderContainer>
  )
}

export const Title = styled.h2`
  ${tw`text-xl font-semibold`}
`

export default Order
