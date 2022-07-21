import { OrderContainer, OrderNumber } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import OrderSummary from "components/composite/Order/SummarySection"
import ActionsMenu from "components/ui/ActionsMenu"
import ActionsMenuItem from "components/ui/ActionsMenuItem"
import Button from "components/ui/Button"
import OrderStatusChip from "components/ui/StatusChip/OrderStatusChip"

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

const Wrapper = styled.div`
  ${tw`px-5 w-full md:(px-0)`}
`

const OrderHeader = styled.div`
  ${tw`flex justify-between mt-3`}
`

const OrderHeaderMain = styled.div`
  ${tw``}
`

const OrderTitle = styled.h2`
  ${tw`block text-lg font-medium`}
`

const OrderDescription = styled.p`
  ${tw`block text-sm text-gray-500 mb-2`}
`

const OrderHeaderActions = styled.div`
  ${tw`flex justify-end`}
`

const MobileOnly = styled.div`
  ${tw`md:(hidden)`}
`

const DesktopOnly = styled.div`
  ${tw`hidden md:(flex gap-2 mt-2)`}
`
