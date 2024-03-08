import { Order, OrderSubscription } from "@commercelayer/sdk"

import {
  OrderSubscriptionStackItemValue,
  OrderSubscriptionStackItemWrapper,
  OrderSubscriptionStackWrapper,
} from "./styled"

import { PageSecondaryTitle } from "#components/ui/Common/styled"
import FormattedDate from "#components/ui/FormattedDate"
import { Stack } from "#components/ui/Stack"

interface Props {
  orderSubscription: OrderSubscription
  orderSubscriptionLastOrder?: Order
}

function SubscriptionStack({
  orderSubscription,
  orderSubscriptionLastOrder,
}: Props): JSX.Element {
  const address =
    orderSubscriptionLastOrder?.shipping_address ??
    orderSubscriptionLastOrder?.billing_address ??
    undefined

  // Example address: Bruce Wayne, Bat Caverna, 432432 Gotham city CA (US) 3892472932
  const addressLine =
    address != null &&
    `${address.full_name}, ${address.line_1}${address.line_2 != null && ` ${address.line_2}`}, ${address.zip_code} ${address.city} ${address.state_code} (${address.country_code}) ${address.phone}`

  return (
    <OrderSubscriptionStackWrapper>
      <Stack>
        <OrderSubscriptionStackItemWrapper>
          <PageSecondaryTitle>Frequency</PageSecondaryTitle>
          <OrderSubscriptionStackItemValue capitalize>
            {orderSubscription?.frequency}
          </OrderSubscriptionStackItemValue>
        </OrderSubscriptionStackItemWrapper>
        <OrderSubscriptionStackItemWrapper>
          <PageSecondaryTitle>Next run date</PageSecondaryTitle>
          <OrderSubscriptionStackItemValue>
            {orderSubscription?.status === "active" ? (
              <FormattedDate date={orderSubscription?.next_run_at} />
            ) : (
              <>&#8212;</>
            )}
          </OrderSubscriptionStackItemValue>
        </OrderSubscriptionStackItemWrapper>
        {address != null && (
          <OrderSubscriptionStackItemWrapper>
            <PageSecondaryTitle>Address</PageSecondaryTitle>
            <OrderSubscriptionStackItemValue capitalize>
              {addressLine}
            </OrderSubscriptionStackItemValue>
          </OrderSubscriptionStackItemWrapper>
        )}
      </Stack>
    </OrderSubscriptionStackWrapper>
  )
}

export default SubscriptionStack
