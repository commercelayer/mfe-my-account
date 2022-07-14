import { OrderContainer, OrderNumber } from "@commercelayer/react-components"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import ActionsMenu from "components/ui/ActionsMenu"
// import OrderTimeline from "components/composite/Order/Timeline"
import OrderSummary from "components/composite/Order/SummarySection"
import OrderStatusChip from "components/composite/Order/OrderStatusChip"
import Button from "components/ui/Button"
import ActionsMenuItem from "components/ui/ActionsMenuItem"

const Order: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const orderId = query.orderId as string

  const { t } = useTranslation()

  return (
      <OrderContainer orderId={orderId}>
        <OrderHeader>
          <OrderHeaderMain>
            <OrderTitle>{t("order.title")} #<OrderNumber /></OrderTitle>
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