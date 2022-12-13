import { LineItemsContainer } from "@commercelayer/react-components/line_items/LineItemsContainer"

import { LineItemTypes } from "#components/composite/Order/LineItemTypes"

function LineItemList(): JSX.Element {
  return (
    <LineItemsContainer>
      <LineItemTypes type="skus" />
    </LineItemsContainer>
  )
}

export default LineItemList
