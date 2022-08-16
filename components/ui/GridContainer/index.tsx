import { Wrapper } from "./styled"

interface Props {
  className?: string
}

export const GridContainer: React.FC<Props> = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)
