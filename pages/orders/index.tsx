import { NextPage } from "next"
import { useRouter } from "next/router"

import Orders from "components/composite/Orders"
import EmptyOrders from "components/composite/Orders/EmptyOrders"

interface Props {
  settings: CustomerSettings
}

const OrderPage: NextPage<Props> = ({ settings }) => {
  const { query } = useRouter()
  const orderId = query.orderId as string

  // return ( <EmptyOrders settings={settings} /> )
  return (
    <Orders settings={settings} />
  )
}

export default OrderPage