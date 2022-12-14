import { Wrapper, Heading } from "./styled"

interface Props {
  children: React.ReactNode
}

function Title({ children }: Props): JSX.Element {
  return (
    <Wrapper>
      <Heading>{children}</Heading>
    </Wrapper>
  )
}

export default Title
