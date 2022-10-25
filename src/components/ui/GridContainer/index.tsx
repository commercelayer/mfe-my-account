import { Wrapper } from "./styled"

type Props = {
  className?: string
}

export const GridContainer: React.FC<Props> = (props) => {
  const { children, className } = props

  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}
