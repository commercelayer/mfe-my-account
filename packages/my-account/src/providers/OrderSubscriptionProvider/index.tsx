import CommerceLayer, { Order, OrderSubscription } from "@commercelayer/sdk"
import { createContext, useEffect, useState } from "react"

import { getInfoFromJwt } from "#utils/getInfoFromJwt"
import { getOrderSubscription } from "#utils/getOrderSubscription"
import { getOrderSubscriptionLastOrder } from "#utils/getOrderSubscriptionLastOrder"

type OrderSubscriptionProviderData = {
  orderSubscription?: OrderSubscription
  orderSubscriptionLastOrder?: Order
  isLoading: boolean
  isInvalid: boolean
}

type OrderSubscriptionStateData = {
  orderSubscription?: OrderSubscription
  orderSubscriptionLastOrder?: Order
  isLoading: boolean
  isInvalid: boolean
}

const initialState: OrderSubscriptionStateData = {
  orderSubscription: undefined,
  orderSubscriptionLastOrder: undefined,
  isLoading: true,
  isInvalid: false,
}

export const OrderSubscriptionContext =
  createContext<OrderSubscriptionProviderData | null>(null)

type OrderSubscriptionProviderProps = {
  orderSubscriptionId: string
  accessToken: string
  domain: string
  children:
    | ((props: OrderSubscriptionProviderData) => React.ReactNode)
    | React.ReactNode
}

export function OrderSubscriptionProvider({
  children,
  orderSubscriptionId,
  accessToken,
  domain,
}: OrderSubscriptionProviderProps): JSX.Element {
  const [state, setState] = useState(initialState)

  const fetchInitialOrderSubscription = async (
    orderSubscriptionId?: string,
    accessToken?: string
  ) => {
    if (!orderSubscriptionId || !accessToken) {
      return
    }

    const { slug, customerId } = getInfoFromJwt(accessToken)
    if (!slug || !customerId) {
      return
    }

    const cl = CommerceLayer({
      organization: slug,
      accessToken,
      domain,
    })

    const orderSubscriptionResponse = await getOrderSubscription({
      client: cl,
      orderSubscriptionId,
    })
    const orderSubscription = orderSubscriptionResponse?.object

    const orderSubscriptionLastOrderResponse =
      await getOrderSubscriptionLastOrder({
        client: cl,
        customerId,
        orderSubscriptionId,
      })
    const orderSubscriptionLastOrder =
      orderSubscriptionLastOrderResponse?.object

    setState({
      ...state,
      orderSubscription,
      orderSubscriptionLastOrder,
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
    orderSubscriptionLastOrder: state.orderSubscriptionLastOrder,
    isLoading: state.isLoading,
    isInvalid: state.isInvalid,
  }

  return (
    <OrderSubscriptionContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </OrderSubscriptionContext.Provider>
  )
}
