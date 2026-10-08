import type { Settings } from "HostedApp"
import { CustomerContainer } from "@commercelayer/react-components"
import type { JSX } from "react"

type CustomerContainerProviderProps = Pick<Settings, "isGuest"> & {
  children: JSX.Element | JSX.Element[] | null
}

export function CustomerContainerProvider({
  children,
  isGuest,
}: CustomerContainerProviderProps): JSX.Element | JSX.Element[] | null {
  return isGuest ? children : <CustomerContainer>{children}</CustomerContainer>
}
