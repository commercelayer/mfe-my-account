import { Address } from "@commercelayer/sdk"
import { createContext, Dispatch } from "react"

type DefaultContext = {
  address: any
  setAddress: Dispatch<Address>
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
