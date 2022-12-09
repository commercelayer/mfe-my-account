import CommerceLayer, { Order } from "@commercelayer/sdk"
import { createContext, useState, useEffect } from "react"

import { getInfoFromJwt } from "#utils/getInfoFromJwt"
import { getOrder } from "#utils/getOrder"

type OrderProviderData = {
  order?: Order
  invalidOrder: boolean
}

type OrderStateData = {
  order?: Order
  invalidOrder: boolean
}

const initialState: OrderStateData = {
  order: undefined,
  invalidOrder: false
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

    const domain = import.meta.env.PUBLIC_DOMAIN || "commercelayer.io"

    const cl = CommerceLayer({
      organization: slug,
      accessToken,
      domain,
    })

    const [orderResponse] = await Promise.all([
      getOrder({ client: cl, orderId }),
    ])
    const order = orderResponse?.object
    const invalidOrder = !order

    setState({
      ...state,
      order,
      invalidOrder,
    })
  }

  useEffect(() => {
    fetchInitialOrder(orderId, accessToken)
  }, [orderId, accessToken])

  const value = {
    ...state,
    order: state.order,
    invalidOrder: state.invalidOrder
  }

  return (
    <OrderContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </OrderContext.Provider>
  )
}