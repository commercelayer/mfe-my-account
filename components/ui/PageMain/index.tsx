import styled from "styled-components"
import tw from "twin.macro"

const PageMain: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>

export default PageMain

const Wrapper = styled.div`
  ${tw`flex-1`}
`
