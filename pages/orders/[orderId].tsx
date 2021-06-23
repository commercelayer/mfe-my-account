import {
  OrderContainer,
  ShipmentsContainer,
  Shipment,
  ShipmentField,
} from "@commercelayer/react-components"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation, Trans } from "react-i18next"
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
      <SubTitle>{t("orders.order.subtitle")}</SubTitle>
      <ShipmentsContainer>
        <Shipment>
          <ShipmentDescription>
            <Trans t={t} i18nKey="orders.order.shipment">
              <ShipmentField name="keyNumber" />
            </Trans>
          </ShipmentDescription>
          <ShipmentDescription>
            <Trans t={t} i18nKey="orders.order.shipmentStatus">
              <ShipmentField name="status" />
            </Trans>
          </ShipmentDescription>
          <LineItemList />
        </Shipment>
      </ShipmentsContainer>
    </OrderContainer>
  )
}

export default Order

export const Title = styled.h1`
  ${tw`text-2xl font-bold`}
`

export const SubTitle = styled.h2`
  ${tw`text-xl font-semibold`}
`
export const ShipmentDescription = styled.p`
  ${tw`text-gray-600 ml-3 font-normal`}
`
