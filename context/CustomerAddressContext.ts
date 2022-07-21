import { createContext, Dispatch } from "react"

type DefaultContext = {
  address: any
  setAddress: Dispatch<object>
  setShowAddressForm: Dispatch<boolean>
}

export const defaultAddressContext = {
  address: {},
  setAddress: () => ({}),
  setShowAddressForm: () => false,
}

const CustomerAddressContext = createContext<DefaultContext>(
  defaultAddressContext
)

export default CustomerAddressContext
