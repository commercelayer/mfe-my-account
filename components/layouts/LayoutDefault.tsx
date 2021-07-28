import styled from "styled-components"
import tw from "twin.macro"

import { Base } from "components/ui/Base"
import { Card } from "components/ui/Card"
import { Container } from "components/ui/Container"
import Footer from "components/ui/Footer"

interface Props {
  aside: React.ReactNode
  main: React.ReactNode
}

export const LayoutDefault: React.FC<Props> = ({ main, aside }) => {
  return (
    <Base>
      <Container>
        <Wrapper>
          <Aside>{aside}</Aside>
          <div tw="min-w-2/3 flex-1">
            <Main>
              <Card fullHeight>{main}</Card>
            </Main>
            <Footer />
          </div>
        </Wrapper>
      </Container>
    </Base>
  )
}

const Wrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col min-h-full lg:h-screen md:flex-row`}
`

const Main = styled.div`
  ${tw`flex-none justify-center order-first md:h-auto md:order-last`}
`

const Aside = styled.div`
  ${tw`flex-none md:flex-1`}
`
