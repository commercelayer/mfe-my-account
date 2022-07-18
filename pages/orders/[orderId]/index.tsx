import { NextPage } from "next"
import { useRouter } from "next/router"

import Order from "components/composite/Order"

interface Props {
  settings: CustomerSettings
}

const OrderPage: NextPage<Props> = ({ settings }) => {
  const { query } = useRouter()
  const orderId = query.orderId as string

  return (
    <Order settings={settings} orderId={orderId} />
  )
}

export default OrderPage