import { Wrapper, Content } from "./styled"

interface Props {
  children: React.ReactNode
}

export function GridCard(props: Props): JSX.Element {
  const { children } = props

  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}
