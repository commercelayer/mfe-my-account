import { Base } from "src/components/ui/Base"
import { Container } from "src/components/ui/Container"
import Footer from "src/components/ui/Footer"

import {
  Wrapper,
  LogoWrapper,
  FooterWrapper,
  FullLogo,
  Main,
  Error,
} from "./styled"

export const ErrorContainer: React.FC = ({ children }) => {
  return (
    <Base>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <FullLogo className="self-center text-black md:pl-4 md:self-auto" />
          </LogoWrapper>
          <Main>
            <Error>{children}</Error>
          </Main>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Wrapper>
      </Container>
    </Base>
  )
}
