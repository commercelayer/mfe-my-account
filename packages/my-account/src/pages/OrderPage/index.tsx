import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { OrderNumber } from "@commercelayer/react-components/orders/OrderNumber"
import { useContext } from "react"
import { Trans } from "react-i18next"
import { Redirect } from "wouter"

import {
  OrderWrapper,
  OrderHeader,
  OrderHeaderMain,
  OrderTitle,
  OrderAccordionWrapper,
} from "./styled"

import OrderAccordion from "#components/composite/Order/OrderAccordion"
import OrderDate from "#components/composite/Order/OrderDate"
import OrderStatus from "#components/composite/Order/OrderStatus"
import { SkeletonMainOrder } from "#components/composite/Skeleton/Main"
import { AppContext } from "#providers/AppProvider"
import { OrderContext } from "#providers/OrderProvider"

interface OrderPageProps {
  orderId: string
}

function OrderPage({ orderId }: OrderPageProps): JSX.Element {
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  const orderCtx = useContext(OrderContext)
  const order = orderCtx?.order
  const invalidOrder = orderCtx?.invalidOrder

  if (invalidOrder) {
    return <Redirect to={`/orders?accessToken=${accessToken}`} />
  } else {
    return (
      <OrderContainer orderId={orderId}>
        <SkeletonMainOrder visible={order === undefined} />
        <OrderWrapper hidden={order === undefined}>
          <OrderHeader>
            <OrderHeaderMain>
              <OrderTitle>
                <Trans i18nKey="order.title">
                  <OrderNumber />
                </Trans>
              </OrderTitle>
              <OrderDate />
              <OrderStatus />
            </OrderHeaderMain>
          </OrderHeader>
          <OrderAccordionWrapper>
            <OrderAccordion />
          </OrderAccordionWrapper>
        </OrderWrapper>
      </OrderContainer>
    )
  }
}

export default OrderPage
