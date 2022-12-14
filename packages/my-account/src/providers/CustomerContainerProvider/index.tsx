import { CustomerContainer } from "@commercelayer/react-components/customers/CustomerContainer"
import type { Settings } from "HostedApp"

type CustomerContainerProviderProps = Pick<Settings, "isGuest"> & {
  children: React.ReactNode
}

export function CustomerContainerProvider({
  children,
  isGuest,
}: CustomerContainerProviderProps): JSX.Element {
  return isGuest ? (
    <>{children}</>
  ) : (
    <CustomerContainer>{children}</CustomerContainer>
  )
}
