import { Order as CLayerOrder } from "@commercelayer/sdk"
import { ArrowBendUpLeft, NotePencil, Printer, Trash } from "phosphor-react"

import ActionsMenu from "components/ui/ActionsMenu"
import ActionsMenuItem from "components/ui/ActionsMenuItem"

type Props = {
  order?: CLayerOrder
}

const OrderActions: React.FC<Props> = ({ order }) => {
  // TODO: Check the content of order prop before to use it. It could be different depending on if it comes from <OrderList> or order page.

  return (
    <ActionsMenu>
      <ActionsMenuItem icon={<NotePencil size={12} />} label="Edit order" />
      <ActionsMenuItem icon={<Printer size={12} />} label="Print invoice" />
      <ActionsMenuItem
        icon={<ArrowBendUpLeft size={12} />}
        label="Create a return"
      />
      <ActionsMenuItem
        icon={<Trash size={12} color="#ED5959" />}
        variant="warning"
        label="Delete order"
      />
    </ActionsMenu>
  )
}

export default OrderActions
