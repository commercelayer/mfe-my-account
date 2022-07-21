import { CustomerContainer } from "@commercelayer/react-components"

interface CustomerContainerProviderProps {
  children: React.ReactNode
  isGuest: boolean
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
