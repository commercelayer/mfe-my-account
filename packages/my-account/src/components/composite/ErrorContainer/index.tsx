import { Wrapper, LogoWrapper, FullLogo, Main, Error } from "./styled"

import { Base } from "#components/ui/Base"
import { FooterWrapper } from "#components/ui/Common/styled"
import { Container } from "#components/ui/Container"
import Footer from "#components/ui/Footer"

export function ErrorContainer({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
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
