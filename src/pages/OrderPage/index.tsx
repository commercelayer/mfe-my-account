import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { OrderNumber } from "@commercelayer/react-components/orders/OrderNumber"
import type { Order as CLayerOrder } from "@commercelayer/sdk"
import { useState, useContext } from "react"
import { Trans } from "react-i18next"
import { Redirect } from "wouter"

import OrderAccordion from "#components/composite/Order/OrderAccordion"
import { SkeletonMainOrder } from "#components/composite/Skeleton/Main"
import OrderStatusChip from "#components/ui/StatusChip/OrderStatusChip"
import type { OrderStatus } from "#components/ui/StatusChip/OrderStatusChip"

import {
  OrderWrapper,
  OrderHeader,
  OrderHeaderMain,
  OrderTitle,
  OrderDescription,
  OrderAccordionWrapper,
} from "./styled"

import { formatDate, shortDate } from "#utils/dateTimeFormats"

import { AppContext } from "#providers/AppProvider"
import { OrderProvider } from "#providers/OrderProvider"

interface OrderPageProps {
  orderId: string
}

function OrderPage({ orderId }: OrderPageProps): JSX.Element {
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  const [fetchedOrder, setFetchedOrder] = useState<CLayerOrder>()
  const orderPlacedAt =
    (fetchedOrder?.placed_at &&
      formatDate(fetchedOrder.placed_at, shortDate)) ||
    ""
  const orderStatus = fetchedOrder
    ? (fetchedOrder.status as OrderStatus)
    : "placed"

  return (
    <OrderProvider orderId={orderId} accessToken={accessToken as string}>
      {({ invalidOrder }) => {
        if (invalidOrder) {
          return <Redirect to={`/orders?accessToken=${accessToken}`} />
        } else {
          return (
            <OrderContainer orderId={orderId} fetchOrder={setFetchedOrder}>
              <SkeletonMainOrder visible={fetchedOrder === undefined} />
              <OrderWrapper hidden={fetchedOrder === undefined}>
                <OrderHeader>
                  <OrderHeaderMain>
                    <OrderTitle>
                      <Trans i18nKey="order.title">
                        <OrderNumber />
                      </Trans>
                    </OrderTitle>
                    <OrderDescription>
                      <Trans i18nKey="order.placed_at">{orderPlacedAt}</Trans>
                    </OrderDescription>
                    <OrderStatusChip status={orderStatus} />
                  </OrderHeaderMain>
                </OrderHeader>
                <OrderAccordionWrapper>
                  <OrderAccordion />
                </OrderAccordionWrapper>
              </OrderWrapper>
            </OrderContainer>
          )
        }
      }}
    </OrderProvider>
  )
}

export default OrderPage
