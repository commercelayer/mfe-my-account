import {
  LineItemsContainer,
  LineItemsCount,
} from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { LineItemTypes } from "../LineItemTypes"

const LineItemList: React.FC = () => {
  const { t } = useTranslation()

  return (
    <LineItemsContainer>
      <SummaryHeader>
        <SummarySubTitle>
          <LineItemsCount>
            {(props) => t("orders.order.contains", { count: props.quantity })}
          </LineItemsCount>
        </SummarySubTitle>
      </SummaryHeader>
      <LineItemTypes type="skus" />
    </LineItemsContainer>
  )
}

export default LineItemList

export const SummaryHeader = styled.div`
  ${tw`mb-12`}
`
export const SummarySubTitle = styled.p`
  ${tw`text-gray-500`}
`
