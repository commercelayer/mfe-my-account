import {
  LineItem,
  LineItemImage,
  LineItemName,
  LineItemCode,
  LineItemQuantity,
  LineItemAmount,
} from "@commercelayer/react-components"
import type { LineItemType } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import {
  LineItemWrapper,
  LineItemContent,
  LineItemDescription,
  LineItemSku,
  LineItemQty,
} from "./styled"

type Props = {
  type: LineItemType
}

export const LineItemTypes: React.FC<Props> = ({ type }) => {
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
                      t("order.quantity", { count: props.quantity })}
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
