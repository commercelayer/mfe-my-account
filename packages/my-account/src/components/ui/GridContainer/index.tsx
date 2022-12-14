import { Wrapper } from "./styled"

interface Props {
  children: React.ReactNode
  className?: string
}

export function GridContainer(props: Props): JSX.Element {
  const { children, className } = props

  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  )
}
