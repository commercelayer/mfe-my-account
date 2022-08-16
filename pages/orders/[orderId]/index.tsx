import { NextPage } from "next"
import { useRouter } from "next/router"

import Order from "components/composite/Order"

const OrderPage: NextPage = () => {
  const { query } = useRouter()
  const orderId = query.orderId as string

  return <Order orderId={orderId} />
}

export default OrderPage
