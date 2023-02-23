import CommerceLayer, { Address } from "@commercelayer/sdk"
import { createContext, useState, useEffect } from "react"

import type { AddressFormFields } from "#types/addresses"
import { getInfoFromJwt } from "#utils/getInfoFromJwt"

type CustomerAddressProviderData = {
  address?: Pick<Address, "id" | Extract<keyof Address, AddressFormFields>>
  isLoading: boolean
}

type CustomerAddressStateData = {
  address?: Pick<Address, "id" | Extract<keyof Address, AddressFormFields>>
  isLoading: boolean
}

const initialState: CustomerAddressStateData = {
  address: undefined,
  isLoading: true,
}

export const CustomerAddressContext =
  createContext<CustomerAddressProviderData | null>(null)

type CustomerAddressProviderProps = {
  addressId?: string
  accessToken: string
  domain: string
  children:
    | ((props: CustomerAddressProviderData) => React.ReactNode)
    | React.ReactNode
}

export function CustomerAddressProvider({
  children,
  addressId,
  accessToken,
  domain,
}: CustomerAddressProviderProps): JSX.Element {
  const [state, setState] = useState(initialState)

  const fetchAddress = async (addressId?: string, accessToken?: string) => {
    if (!addressId || !accessToken) {
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

    const address = await cl.addresses.retrieve(addressId)

    setState({
      ...state,
      address,
      isLoading: false,
    })
  }

  useEffect(() => {
    setState({ ...state, isLoading: true })
    fetchAddress(addressId, accessToken)
  }, [addressId, accessToken])

  const value = {
    ...state,
    address: state.address,
    isLoading: state.isLoading,
  }

  return (
    <CustomerAddressContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </CustomerAddressContext.Provider>
  )
}
