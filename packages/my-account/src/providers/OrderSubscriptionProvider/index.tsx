import CommerceLayer, { OrderSubscription } from "@commercelayer/sdk"
import { createContext, useEffect, useState } from "react"

import { getInfoFromJwt } from "#utils/getInfoFromJwt"
import { getOrderSubscription } from "#utils/getOrderSubscription"

type OrderSubscriptionProviderData = {
  orderSubscription?: OrderSubscription
  isLoading: boolean
  isInvalid: boolean
}

type OrderSubscriptionStateData = {
  orderSubscription?: OrderSubscription
  isLoading: boolean
  isInvalid: boolean
}

const initialState: OrderSubscriptionStateData = {
  orderSubscription: undefined,
  isLoading: true,
  isInvalid: false,
}

export const OrderSubscriptionContext = createContext<OrderSubscriptionProviderData | null>(null)

type OrderSubscriptionProviderProps = {
  orderSubscriptionId: string
  accessToken: string
  domain: string
  children: ((props: OrderSubscriptionProviderData) => React.ReactNode) | React.ReactNode
}

export function OrderSubscriptionProvider({
  children,
  orderSubscriptionId,
  accessToken,
  domain,
}: OrderSubscriptionProviderProps): JSX.Element {
  const [state, setState] = useState(initialState)

  const fetchInitialOrderSubscription = async (orderSubscriptionId?: string, accessToken?: string) => {
    if (!orderSubscriptionId || !accessToken) {
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

    const orderSubscriptionResponse = await getOrderSubscription({ client: cl, orderSubscriptionId: orderSubscriptionId })
    const orderSubscription = orderSubscriptionResponse?.object

    setState({
      ...state,
      orderSubscription,
      isLoading: false,
      isInvalid: !orderSubscription,
    })
  }

  useEffect(() => {
    setState({ ...state, isLoading: true })
    fetchInitialOrderSubscription(orderSubscriptionId, accessToken)
  }, [orderSubscriptionId, accessToken])

  const value = {
    ...state,
    orderSubscription: state.orderSubscription,
    isLoading: state.isLoading,
    isInvalid: state.isInvalid,
  }

  return (
    <OrderSubscriptionContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </OrderSubscriptionContext.Provider>
  )
}
