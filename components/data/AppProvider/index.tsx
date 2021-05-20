import { createContext, useState, useEffect } from "react"

import {
  fetchCustomerById,
  FetchCustomerByIdResponse,
} from "./fetchCustomerById"

interface AppProviderData extends FetchCustomerByIdResponse {
  isLoading: boolean
  customerId: string
  accessToken: string
  endpoint: string
  isFirstLoading: boolean
  refetchCustomer: () => Promise<void>
}

interface AppStateData extends FetchCustomerByIdResponse {
  isLoading: boolean
  isFirstLoading: boolean
}

const initialState: AppStateData = {
  isLoading: true,
  isFirstLoading: true,
  email: "",
  hasPassword: false,
}

export const AppContext = createContext<AppProviderData | null>(null)

interface AppProviderProps {
  endpoint: string
  customerId: string
  accessToken: string
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  customerId,
  accessToken,
  endpoint,
}) => {
  const [state, setState] = useState(initialState)

  const fetchCustomerHandle = async (
    customerId?: string,
    accessToken?: string
  ) => {
    if (!customerId || !accessToken) {
      return
    }
    setState({ ...state, isLoading: true })

    return await fetchCustomerById({ customerId, accessToken, endpoint }).then(
      (newState) => {
        console.log("newState")
        console.log(newState)
        setState({ ...newState, isLoading: false, isFirstLoading: false })
      }
    )
  }

  useEffect(() => {
    fetchCustomerHandle(customerId, accessToken)
  }, [customerId, accessToken])

  return (
    <AppContext.Provider
      value={{
        ...state,
        customerId,
        accessToken,
        endpoint,
        refetchCustomer: async () => {
          return await fetchCustomerHandle(customerId, accessToken)
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
