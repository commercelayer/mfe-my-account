import { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Header from "components/composite/Header"
import { Base } from "components/ui/Base"
import { Card } from "components/ui/Card"
import { Container } from "components/ui/Container"
import Footer from "components/ui/Footer"

interface Props {
  aside: React.ReactNode
  main: React.ReactNode
  settings: CustomerSettings
}

export const LayoutDefault: React.FC<Props> = ({ main, aside, settings }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { logoUrl, companyName } = settings

  return (
    <Base>
      <Container>
        <Wrapper>
          <DesktopOnly>
            <Aside>{aside}</Aside>
          </DesktopOnly>
          {showMobileMenu && <MobileMenu>{aside}</MobileMenu>}
          <Main>
            <Card fullHeight>
              <Header
                logoUrl={logoUrl}
                companyName={companyName}
                showMobileMenu={showMobileMenu}
                setShowMobileMenu={setShowMobileMenu}
              />
              {main}
              <Footer />
            </Card>
          </Main>
        </Wrapper>
      </Container>
    </Base>
  )
}

const Wrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col min-h-full md:(h-screen flex-row)`}
`

const Main = styled.div`
  ${tw`flex-none justify-center order-first md:(flex-1 order-last)`}
`

const DesktopOnly = styled.div`
  ${tw`hidden md:(inline bg-gray-100)`}
`

const Aside = styled.div`
  ${tw`flex-none md:flex-1`}
`
const MobileMenu = styled.div`
  ${tw`z-10 fixed top-19 left-0 bottom-0 flex flex-col min-w-full max-w-sm py-6 px-6 bg-white border-r overflow-y-auto md:(hidden)`}
`
