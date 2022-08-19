import { NextPage } from "next"
import { useRouter } from "next/router"

import Order from "components/composite/Order"
import { OrderProvider } from "components/data/OrderProvider"

const OrderPage: NextPage = () => {
  const { query } = useRouter()
  const orderId = query.orderId as string
  const accessToken = query.accessToken as string

  return (
    <OrderProvider orderId={orderId} accessToken={accessToken}>
      {({ order }) => {
        return <Order orderId={orderId} order={order} />
      }}
    </OrderProvider>
  )
}

export default OrderPage
