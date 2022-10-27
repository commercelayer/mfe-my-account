import { Wrapper } from "./styled"

type Props = {
  className?: string
}

export const Base: React.FC<Props> = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
)
