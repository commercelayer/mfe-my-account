import { LineItemsContainer } from "@commercelayer/react-components"
import type { JSX } from "react"

import { LineItemTypes } from "#components/composite/order/LineItemTypes"

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
