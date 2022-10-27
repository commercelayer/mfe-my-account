import CommerceLayer, { Order } from "@commercelayer/sdk"
import { createContext, useState, useEffect } from "react"

import { getInfoFromJwt } from "src/utils/getInfoFromJwt"
import { getOrder } from "src/utils/getOrder"

type OrderProviderData = {
  order?: Order
}

type OrderStateData = {
  order?: Order
}

const initialState: OrderStateData = {
  order: undefined,
}

export const OrderContext = createContext<OrderProviderData | null>(null)

type OrderProviderProps = {
  orderId: string
  accessToken: string
  children: ((props: OrderProviderData) => React.ReactNode) | React.ReactNode
}

export const OrderProvider: React.FC<OrderProviderProps> = ({
  children,
  orderId,
  accessToken,
}) => {
  const [state, setState] = useState(initialState)

  const fetchInitialOrder = async (orderId?: string, accessToken?: string) => {
    if (!orderId || !accessToken) {
      return
    }

    const { slug } = getInfoFromJwt(accessToken)
    if (!slug) {
      return
    }

    const domain = process.env.NEXT_PUBLIC_DOMAIN || "commercelayer.io"

    const cl = CommerceLayer({
      organization: slug,
      accessToken,
      domain,
    })

    const [orderResponse] = await Promise.all([
      getOrder({ client: cl, orderId }),
    ])
    const order = orderResponse?.object

    setState({
      ...state,
      order,
    })
  }

  useEffect(() => {
    fetchInitialOrder(orderId, accessToken)
  }, [orderId, accessToken])

  const value = {
    ...state,
    order: state.order,
  }

  return (
    <OrderContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </OrderContext.Provider>
  )
}