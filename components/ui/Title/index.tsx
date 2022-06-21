import { Wrapper, Heading } from "./styled"

const Title: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Heading>
        {children}
      </Heading>
    </Wrapper>
  )
}

export default Title

