import { useContext } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import styled from "styled-components"
import tw from "twin.macro"

import { AppContext } from "components/data/AppProvider"

const Shipment: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const orderId = query.orderId as string

  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  router.push(`/orders/${orderId}?accessToken=${accessToken}`)

  return (
    <div></div>
  )
}

export default Shipment

const ShipmentContainer = styled.div`
  ${tw``}
`