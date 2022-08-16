import { OrderContainer, OrderNumber } from "@commercelayer/react-components"
import { Order as CLayerOrder } from "@commercelayer/sdk"
import { format } from "date-fns"
import { useState } from "react"
import { Trans, useTranslation } from "react-i18next"

import OrderAccordion from "components/composite/Order/OrderAccordion"
import ActionsMenu from "components/ui/ActionsMenu"
import ActionsMenuItem from "components/ui/ActionsMenuItem"
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
}

const Order: React.FC<Props> = ({ orderId }) => {
  const { t } = useTranslation()
  const [order, setOrder] = useState<CLayerOrder>()
  const orderPlacedAt = order
    ? format(new Date(order.placed_at as string), "dd/MM/yy")
    : ""
  const orderStatus = order ? (order.status as OrderStatus) : "placed"

  return (
    // <OrderContainer orderId={orderId} fetchOrder={setOrder}>
    <OrderContainer orderId={orderId}>
      <OrderHeader>
        <OrderHeaderMain>
          <OrderTitle>
            <Trans
              i18nKey="order.title"
              components={{ number: <OrderNumber /> }}
            />
          </OrderTitle>
          <OrderDescription>
            {t("order.placed_at")} {orderPlacedAt}
          </OrderDescription>
          <OrderStatusChip status={orderStatus} />
        </OrderHeaderMain>
        <OrderHeaderActions>
          <ActionsMenu className="mt-1">
            <ActionsMenuItem label="Invoice" />
            <ActionsMenuItem label="Print" />
          </ActionsMenu>
        </OrderHeaderActions>
      </OrderHeader>
      <Wrapper>
        <OrderAccordion order={order} />
      </Wrapper>
    </OrderContainer>
  )
}

export default Order
