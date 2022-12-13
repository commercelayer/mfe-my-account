import { Wrapper } from "./styled"

interface Props {
  className?: string
  children: React.ReactNode
}

export function Base({ className, children }: Props): JSX.Element {
  return <Wrapper className={className}>{children}</Wrapper>
}
