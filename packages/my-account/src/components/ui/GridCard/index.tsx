import { Wrapper, Content } from "./styled"

export type GridCardHover = "none"

interface Props {
  children: React.ReactNode
  hover?: GridCardHover
}

export function GridCard(props: Props): JSX.Element {
  const { children, hover } = props

  return (
    <Wrapper hover={hover}>
      <Content>{children}</Content>
    </Wrapper>
  )
}
