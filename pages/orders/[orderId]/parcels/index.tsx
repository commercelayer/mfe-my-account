import { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext } from "react"

import Skeleton from "components/composite/Skeleton"
import { AppContext } from "components/data/AppProvider"

const Shipment: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const orderId = query.orderId as string

  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  router.push(`/orders/${orderId}?accessToken=${accessToken}`)

  return <Skeleton />
}

export default Shipment
