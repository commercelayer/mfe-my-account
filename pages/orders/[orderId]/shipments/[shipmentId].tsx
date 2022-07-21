import { Settings } from "HostedApp"
import { NextPage } from "next"
import { useRouter } from "next/router"

import OrderShipment from "components/composite/OrderShipment"

interface Props {
  settings: Settings
}

const OrderShipmentPage: NextPage<Props> = ({ settings }) => {
  const { query } = useRouter()
  const orderId = query.orderId as string
  const shipmentId = query.shipmentId as string

  return (
    <OrderShipment
      settings={settings}
      orderId={orderId}
      shipmentId={shipmentId}
    />
  )
}

export default OrderShipmentPage
