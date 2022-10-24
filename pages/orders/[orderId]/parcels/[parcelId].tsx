import type { Settings } from "HostedApp"
import { NextPage } from "next"
import { useRouter } from "next/router"

import OrderParcel from "components/composite/OrderParcel"

type Props = {
  settings: Settings
}

const OrderParcelPage: NextPage<Props> = ({ settings }) => {
  const { query } = useRouter()
  const orderId = query.orderId as string
  const parcelId = query.parcelId as string

  return (
    <OrderParcel settings={settings} orderId={orderId} parcelId={parcelId} />
  )
}

export default OrderParcelPage
