import { createContext, useState, useEffect } from "react"
import CommerceLayer from "@commercelayer/sdk"
import { getInfoFromJwt } from "utils/getInfoFromJwt"
import { getCustomerDetails } from "utils/getCustomerDetails"

interface AppProviderData {
  email: string
  hasPassword: boolean
  isLoading: boolean
  customerId: string
  accessToken: string
  endpoint: string
  isFirstLoading: boolean
  showMobileMenu: boolean
  refetchCustomer: () => Promise<void>
  toggleShowMobileMenu: () => void
}

interface AppStateData {
  email: string
  hasPassword: boolean
  isLoading: boolean
  isFirstLoading: boolean
  showMobileMenu: boolean
}

const initialState: AppStateData = {
  isLoading: true,
  isFirstLoading: true,
  email: "",
  hasPassword: false,
  showMobileMenu: false
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

    const { slug } = getInfoFromJwt(accessToken)
    if (!slug) {
      return
    }

    const domain = process.env.NEXT_PUBLIC_DOMAIN || "commercelayer.io"

    const client = CommerceLayer({
      organization: slug,
      accessToken,
      domain,
    })

    return await getCustomerDetails({
      client,
      customerId
    }).then((customerResponse) => {
      const customer = customerResponse?.object
      setState({
        email: customer && customer.email !== undefined ? customer.email : '',
        hasPassword: customer && customer.has_password !== undefined ? customer.has_password : false,
        isLoading: false,
        isFirstLoading: false,
        showMobileMenu: false
      })
    })
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
        toggleShowMobileMenu: () => {
          setState({ ...state, showMobileMenu: !state.showMobileMenu })
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
