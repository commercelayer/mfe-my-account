import { Bundle, OrderSubscription, Sku } from "@commercelayer/sdk"
import { useTranslation } from "react-i18next"

import {
  LineItemWrapper,
  LineItemContent,
  LineItemDescription,
  LineItemSku,
  LineItemQty,
} from "#components/ui/LineItem/styled"

interface Props {
  orderSubscription: OrderSubscription
}

function SubscriptionSummary({ orderSubscription }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-6">
      {orderSubscription.order_subscription_items?.map(
        (subcriptionItem, idx) => {
          const lineItem = subcriptionItem.item as Sku | Bundle
          return (
            <div key={idx}>
              <LineItemWrapper>
                <img
                  src={lineItem?.image_url ?? ""}
                  className="self-start p-1 border rounded w-[75px] md:w-[85px] bg-contrast"
                />
                <LineItemContent>
                  <LineItemDescription>
                    <LineItemSku>
                      SKU{" "}
                      <span className="text-xs text-gray-600">
                        {lineItem.code}
                      </span>
                    </LineItemSku>
                    <span className="block mb-1 font-bold">
                      {lineItem.name}
                    </span>
                    <LineItemQty>
                      {t("order.summary.quantity", {
                        count: subcriptionItem.quantity,
                      })}
                    </LineItemQty>
                  </LineItemDescription>
                  <span className="pt-4 text-lg font-extrabold">
                    {subcriptionItem.formatted_unit_amount}
                  </span>
                </LineItemContent>
              </LineItemWrapper>
            </div>
          )
        }
      )}
    </div>
  )
}

export default SubscriptionSummary
