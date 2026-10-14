import type { Settings } from "HostedApp"
import { Customer } from "@commercelayer/react-components"

type CustomerContainerProviderProps = Pick<Settings, "isGuest"> & {
  children: JSX.Element | JSX.Element[] | null
}

export function CustomerContainerProvider({
  children,
  isGuest,
}: CustomerContainerProviderProps): JSX.Element | JSX.Element[] | null {
  return isGuest ? children : <Customer>{children}</Customer>
}
