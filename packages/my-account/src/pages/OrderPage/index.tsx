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
import type { OrderStatus } from "#components/composite/Order/OrderStatusChip"
import OrderStatusChip from "#components/composite/Order/OrderStatusChip"
import { SkeletonMainOrder } from "#components/composite/Skeleton/Main"
import { AppContext } from "#providers/AppProvider"
import { OrderProvider } from "#providers/OrderProvider"

interface OrderPageProps {
  orderId: string
}

function OrderPage({ orderId }: OrderPageProps): JSX.Element {
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  return (
    <OrderProvider
      orderId={orderId}
      accessToken={accessToken as string}
      domain={ctx?.domain as string}
    >
      {({ isInvalid, isLoading, order }) => (
        <>
          {isInvalid ? (
            <Redirect to={`/orders?accessToken=${accessToken}`} />
          ) : (
            <OrderContainer orderId={orderId}>
              <SkeletonMainOrder visible={isLoading} />
              <OrderWrapper hidden={isLoading}>
                <OrderHeader>
                  <OrderHeaderMain>
                    <OrderTitle>
                      <Trans i18nKey="order.title">
                        <OrderNumber />
                      </Trans>
                    </OrderTitle>
                    <OrderDate placed_at={order?.placed_at} />
                    <OrderStatusChip status={order?.status as OrderStatus} />
                  </OrderHeaderMain>
                </OrderHeader>
                <OrderAccordionWrapper>
                  <OrderAccordion />
                </OrderAccordionWrapper>
              </OrderWrapper>
            </OrderContainer>
          )}
        </>
      )}
    </OrderProvider>
  )
}

export default OrderPage
