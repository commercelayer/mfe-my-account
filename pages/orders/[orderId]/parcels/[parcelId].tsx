import { Settings } from "HostedApp"
import { NextPage } from "next"
import { useRouter } from "next/router"

import OrderParcel from "components/composite/OrderParcel"
import { ParcelProvider } from "components/data/ParcelProvider"

interface Props {
  settings: Settings
}

const OrderParcelPage: NextPage<Props> = ({ settings }) => {
  const { query } = useRouter()
  const orderId = query.orderId as string
  const parcelId = query.parcelId as string
  const accessToken = query.accessToken as string

  return (
    <ParcelProvider parcelId={parcelId} accessToken={accessToken}>
      {({ parcel }) => {
        return (
          <OrderParcel
            settings={settings}
            orderId={orderId}
            parcelId={parcelId}
            parcel={parcel}
          />
        )
      }}
    </ParcelProvider>
  )
}

export default OrderParcelPage
