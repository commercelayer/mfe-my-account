import CommerceLayer, { Order } from "@commercelayer/sdk"
import { createContext, useState, useEffect, ReactNode } from "react"

import { fetchOrder } from "utils/fetchOrder"
import { getInfoFromJwt } from "utils/getInfoFromJwt"

interface OrderProviderData {
  order?: Order
}

interface OrderStateData {
  order?: Order
}

const initialState: OrderStateData = {
  order: undefined,
}

export const OrderContext = createContext<OrderProviderData | null>(null)

interface OrderProviderProps {
  orderId: string
  accessToken: string
  children: ((props: OrderProviderData) => ReactNode) | ReactNode
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

    const order = await fetchOrder(cl, orderId)

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
