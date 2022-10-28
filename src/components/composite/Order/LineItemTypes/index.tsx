import {
  LineItem,
  LineItemImage,
  LineItemName,
  LineItemQuantity,
  LineItemAmount,
} from "@commercelayer/react-components"
import type { LineItemType } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import { LineItemWrapper, LineItemDescription, LineItemQty } from "./styled"

type Props = {
  type: LineItemType
}

export const LineItemTypes: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation()

  return (
    <LineItem type={type}>
      <LineItemWrapper>
        <LineItemImage className="self-start p-1 border rounded w-[75px] md:w-[85px] bg-contrast" />
        <LineItemDescription>
          <LineItemName className="font-bold" />
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
          <LineItemAmount className="mt-2 font-extrabold" />
        </LineItemDescription>
      </LineItemWrapper>
    </LineItem>
  )
}
