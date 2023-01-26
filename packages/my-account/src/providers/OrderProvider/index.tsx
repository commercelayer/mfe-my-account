import CommerceLayer, { Order } from "@commercelayer/sdk"
import { createContext, useState, useEffect } from "react"

import { getInfoFromJwt } from "#utils/getInfoFromJwt"
import { getOrder } from "#utils/getOrder"

type OrderProviderData = {
  order?: Order
  isLoading: boolean
  isInvalid: boolean
}

type OrderStateData = {
  order?: Order
  isLoading: boolean
  isInvalid: boolean
}

const initialState: OrderStateData = {
  order: undefined,
  isLoading: true,
  isInvalid: false,
}

export const OrderContext = createContext<OrderProviderData | null>(null)

type OrderProviderProps = {
  orderId: string
  accessToken: string
  domain: string
  children: ((props: OrderProviderData) => React.ReactNode) | React.ReactNode
}

export function OrderProvider({
  children,
  orderId,
  accessToken,
  domain,
}: OrderProviderProps): JSX.Element {
  const [state, setState] = useState(initialState)

  const fetchInitialOrder = async (orderId?: string, accessToken?: string) => {
    if (!orderId || !accessToken) {
      return
    }

    const { slug } = getInfoFromJwt(accessToken)
    if (!slug) {
      return
    }

    const cl = CommerceLayer({
      organization: slug,
      accessToken,
      domain,
    })

    const orderResponse = await getOrder({ client: cl, orderId })
    const order = orderResponse?.object

    setState({
      ...state,
      order,
      isLoading: false,
      isInvalid: !order,
    })
  }

  useEffect(() => {
    setState({ ...state, isLoading: true })
    fetchInitialOrder(orderId, accessToken)
  }, [orderId, accessToken])

  const value = {
    ...state,
    order: state.order,
    isLoading: state.isLoading,
    isInvalid: state.isInvalid,
  }

  return (
    <OrderContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </OrderContext.Provider>
  )
}
