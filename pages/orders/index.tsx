import { NextPage } from "next"

import Orders from "components/composite/Orders"
import EmptyOrders from "components/composite/Orders/EmptyOrders"

interface Props {
  settings: CustomerSettings
}

const OrdersPage: NextPage<Props> = ({ settings }) => {
  // return ( <EmptyOrders settings={settings} /> )
  return (
    <Orders settings={settings} />
  )
}

export default OrdersPage