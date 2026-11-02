import { LineItems } from "@commercelayer/react-components"
import { LineItemTypes } from "#components/composite/order/LineItemTypes"

function LineItemList(): JSX.Element {
  return (
    <LineItems>
      <div className="flex flex-col gap-6">
        <LineItemTypes type="skus" />
      </div>
    </LineItems>
  )
}

export default LineItemList
