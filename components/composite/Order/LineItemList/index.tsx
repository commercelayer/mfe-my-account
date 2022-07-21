import { LineItemsContainer } from "@commercelayer/react-components"

import { LineItemTypes } from "components/composite/Order/LineItemTypes"

const LineItemList: React.FC = () => {
  return (
    <LineItemsContainer>
      <LineItemTypes type="skus" />
    </LineItemsContainer>
  )
}

export default LineItemList
