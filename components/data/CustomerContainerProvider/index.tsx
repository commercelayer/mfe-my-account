import { CustomerContainer } from "@commercelayer/react-components"
import { Settings } from "HostedApp"

type CustomerContainerProviderProps = Pick<Settings, "isGuest"> & {
  children: React.ReactNode
}

export const CustomerContainerProvider: React.FC<
  CustomerContainerProviderProps
> = ({ children, isGuest }) => {
  return !isGuest ? (
    <CustomerContainer>{children}</CustomerContainer>
  ) : (
    <>{children}</>
  )
}
