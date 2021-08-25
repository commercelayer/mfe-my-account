import {
  LineItem,
  LineItemImage,
  LineItemName,
  LineItemQuantity,
  LineItemAmount,
} from "@commercelayer/react-components"
import { LineItemType } from "@commercelayer/react-components/dist/typings"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  type: LineItemType
}

export const LineItemTypes: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation()

  return (
    <LineItem type={type}>
      <LineItemWrapper>
        <LineItemImage
          width={85}
          className="self-start p-1 border rounded bg-contrast"
        />
        <LineItemDescription>
          <LineItemName className="font-bold" />
          <LineItemQty>
            <LineItemQuantity>
              {(props) =>
                !!props.quantity &&
                t("order.quantity", { count: props.quantity })
              }
            </LineItemQuantity>
          </LineItemQty>
          <LineItemAmount className="mt-2 font-extrabold" />
        </LineItemDescription>
      </LineItemWrapper>
    </LineItem>
  )
}

const LineItemWrapper = styled.div`
  ${tw`flex flex-row pt-6 pb-8 border-b`}
`
const LineItemDescription = styled.div`
  ${tw`pl-4 flex flex-col flex-1 lg:pl-8`}
`
const LineItemQty = styled.div`
  ${tw`text-xs uppercase mt-1 text-gray-500`}
`
