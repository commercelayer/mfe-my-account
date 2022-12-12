import { CustomerContainer } from "@commercelayer/react-components/customers/CustomerContainer"
import type { Settings } from "HostedApp"

type CustomerContainerProviderProps = Pick<Settings, "isGuest"> & {
  children: React.ReactNode
}

export const CustomerContainerProvider: React.FC<
  CustomerContainerProviderProps
> = ({ children, isGuest }) => {
  return isGuest ? (
    <>{children}</>
  ) : (
    <CustomerContainer>{children}</CustomerContainer>
  )
}
