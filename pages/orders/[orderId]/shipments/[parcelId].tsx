import { Settings } from "HostedApp"
import { NextPage } from "next"
import { useRouter } from "next/router"

import OrderShipment from "components/composite/OrderShipment"
import { ParcelProvider } from "components/data/ParcelProvider"

interface Props {
  settings: Settings
}

const OrderShipmentPage: NextPage<Props> = ({ settings }) => {
  const { query } = useRouter()
  const orderId = query.orderId as string
  const parcelId = query.parcelId as string
  const accessToken = query.accessToken as string

  return (
    <ParcelProvider parcelId={parcelId} accessToken={accessToken}>
      {({ parcel }) => {
        return (
          <OrderShipment
            settings={settings}
            orderId={orderId}
            parcel={parcel}
          />
        )
      }}
    </ParcelProvider>
  )
}

export default OrderShipmentPage
