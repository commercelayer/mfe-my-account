import { LineItemsContainer } from "@commercelayer/react-components/line_items/LineItemsContainer"

import { LineItemTypes } from "#components/composite/Order/LineItemTypes"

function LineItemList(): JSX.Element {
  return (
    <LineItemsContainer>
      <div className="flex flex-col gap-6">
        <LineItemTypes type="skus" />
      </div>
    </LineItemsContainer>
  )
}

export default LineItemList
