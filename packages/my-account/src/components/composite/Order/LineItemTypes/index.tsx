import type { TLineItem } from "@commercelayer/react-components"
import { LineItem } from "@commercelayer/react-components/line_items/LineItem"
import { LineItemAmount } from "@commercelayer/react-components/line_items/LineItemAmount"
import { LineItemCode } from "@commercelayer/react-components/line_items/LineItemCode"
import { LineItemImage } from "@commercelayer/react-components/line_items/LineItemImage"
import { LineItemName } from "@commercelayer/react-components/line_items/LineItemName"
import { LineItemQuantity } from "@commercelayer/react-components/line_items/LineItemQuantity"
import { useTranslation } from "react-i18next"

import {
  LineItemWrapper,
  LineItemContent,
  LineItemDescription,
  LineItemSku,
  LineItemQty,
} from "./styled"

interface Props {
  type: TLineItem
}

export function LineItemTypes({ type }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <LineItem type={type}>
      <LineItemWrapper>
        <LineItemImage className="self-start p-1 border rounded w-[75px] md:w-[85px] bg-contrast" />
        <LineItemContent>
          <LineItemDescription>
            <LineItemSku>
              SKU <LineItemCode className="text-xs text-gray-600" />
            </LineItemSku>
            <LineItemName className="block mb-1 font-bold" />
            <LineItemQty>
              <LineItemQuantity>
                {(props) => (
                  <>
                    {!!props.quantity &&
                      t("order.summary.quantity", { count: props.quantity })}
                  </>
                )}
              </LineItemQuantity>
            </LineItemQty>
          </LineItemDescription>
          <LineItemAmount className="pt-4 text-lg font-extrabold" />
        </LineItemContent>
      </LineItemWrapper>
    </LineItem>
  )
}
