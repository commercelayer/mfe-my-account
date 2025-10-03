import { Order, OrderSubscription } from "@commercelayer/sdk"

import cn from "classnames"
import FormattedDate from "#components/ui/FormattedDate"
import { Stack } from "#components/ui/Stack"

function OrderSubscriptionStackItemValue({ capitalize, children }: { capitalize?: boolean; children: React.ReactNode }) {
  return (
    <h4 className={cn('block text-base font-medium', { 'capitalize': capitalize })}>
      {children}
    </h4>
  )
}

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
    <div className="relative mt-8">
      <Stack>
        <div className="flex flex-col gap-2">
          <h4 className="block text-sm font-medium text-gray-500">Frequency</h4>
          <OrderSubscriptionStackItemValue capitalize>
            {orderSubscription?.frequency}
          </OrderSubscriptionStackItemValue>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="block text-sm font-medium text-gray-500">Next run date</h4>
          <OrderSubscriptionStackItemValue>
            {orderSubscription?.status === "active" ? (
              <FormattedDate date={orderSubscription?.next_run_at} />
            ) : (
              <>&#8212;</>
            )}
          </OrderSubscriptionStackItemValue>
        </div>
        {address != null && (
          <div className="flex flex-col gap-2">
            <h4 className="block text-sm font-medium text-gray-500">Address</h4>
            <OrderSubscriptionStackItemValue capitalize>
              {addressLine}
            </OrderSubscriptionStackItemValue>
          </div>
        )}
      </Stack>
    </div>
  )
}

export default SubscriptionStack
