import { LineItemsContainer } from "@commercelayer/react-components"

import { LineItemTypes } from "../LineItemTypes"

const LineItemList: React.FC = () => {
  return (
    <LineItemsContainer>
      <LineItemTypes type="skus" />
    </LineItemsContainer>
  )
}

export default LineItemList
