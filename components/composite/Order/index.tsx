import { OrderContainer, OrderNumber } from "@commercelayer/react-components"
import { Order as CLayerOrder } from "@commercelayer/sdk"
import { format } from "date-fns"
// import { useState } from "react"
import { Trans } from "react-i18next"

import OrderAccordion from "components/composite/Order/OrderAccordion"
import OrderActions from "components/ui/OrderActions"
import OrderStatusChip, {
  OrderStatus,
} from "components/ui/StatusChip/OrderStatusChip"

import {
  Wrapper,
  OrderHeader,
  OrderHeaderMain,
  OrderTitle,
  OrderDescription,
  OrderHeaderActions,
} from "./styled"

interface Props {
  orderId: string
  order?: CLayerOrder
}

const Order: React.FC<Props> = ({ orderId, order }) => {
  // const [order, setOrder] = useState<CLayerOrder>()
  const orderPlacedAt = order
    ? format(new Date(order.placed_at as string), "dd/MM/yy")
    : ""
  const orderStatus = order ? (order.status as OrderStatus) : "placed"

  return (
    <OrderContainer orderId={orderId} /* fetchOrder={setOrder} */>
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
        <OrderHeaderActions>
          <OrderActions order={order} />
        </OrderHeaderActions>
      </OrderHeader>
      <Wrapper>
        <OrderAccordion order={order} />
      </Wrapper>
    </OrderContainer>
  )
}

export default Order
