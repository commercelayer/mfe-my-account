import { OrderContainer, OrderNumber } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import OrderSummary from "components/composite/Order/SummarySection"
import ActionsMenu from "components/ui/ActionsMenu"
import ActionsMenuItem from "components/ui/ActionsMenuItem"
import Button from "components/ui/Button"
import OrderStatusChip from "components/ui/StatusChip/OrderStatusChip"

import {
  Wrapper,
  OrderHeader,
  OrderHeaderMain,
  OrderTitle,
  OrderDescription,
  OrderHeaderActions,
  MobileOnly,
  DesktopOnly,
} from "./styled"

interface Props {
  orderId: string
}

const Order: React.FC<Props> = ({ orderId }) => {
  const { t } = useTranslation()

  return (
    <OrderContainer orderId={orderId}>
      <OrderHeader>
        <OrderHeaderMain>
          <OrderTitle>
            {t("order.title")} #<OrderNumber />
          </OrderTitle>
          <OrderDescription>{t("order.placed_on")} XX/XX/XX</OrderDescription>
          <OrderStatusChip status="placed" />
        </OrderHeaderMain>
        <OrderHeaderActions>
          <MobileOnly>
            <ActionsMenu className="mt-1">
              <ActionsMenuItem label="Invoice" />
              <ActionsMenuItem label="Print" />
            </ActionsMenu>
          </MobileOnly>
          <DesktopOnly>
            <Button label="Invoice" buttonSize="small" />
            <Button label="Print" buttonSize="small" buttonStyle="outline" />
          </DesktopOnly>
        </OrderHeaderActions>
      </OrderHeader>
      <Wrapper>
        {/* <OrderTimeline /> */}
        <OrderSummary />
      </Wrapper>
    </OrderContainer>
  )
}

export default Order
