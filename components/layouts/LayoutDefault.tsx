import { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Header from "components/composite/Header"
import Navbar from "components/composite/Navbar"
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
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)
  const { logoUrl, companyName } = settings

  return (
    <Base>
      <Container>
        <Wrapper>
          <HeaderWrapper>
            <Header
              logoUrl={logoUrl}
              companyName={companyName}
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
          </HeaderWrapper>
          <DesktopOnly>
            <Aside>{aside}</Aside>
          </DesktopOnly>
          {showMobileMenu && (
            <Aside>
              <Navbar settings={settings} onClick={toggleMobileMenu} />
            </Aside>
          )}
          <Main>
            <Card fullHeight>{main}</Card>
          </Main>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Wrapper>
      </Container>
    </Base>
  )
}

const Wrapper = styled.div`
  ${tw`min-h-full flex flex-col bg-contrast xl:(grid grid-cols-1 h-screen grid-cols-3 grid-rows-10)`}
`

const HeaderWrapper = styled.div`
  ${tw`xl:(col-start-2 col-span-full h-20 bg-contrast pl-16 z-50 w-3/4)`}
`

const Main = styled.div`
  ${tw`flex flex-1 bg-gray-100 xl:(col-start-2 col-span-full row-start-2 row-end-10 overflow-y-auto bg-contrast w-3/4)`}
`

const DesktopOnly = styled.div`
  ${tw`hidden xl:(inline order-first)`}
`

const Aside = styled.div`
  ${tw`block`}
`

const FooterWrapper = styled.div`
  ${tw`col-start-2 col-span-full row-start-10 bg-gray-100 xl:(pl-16 bg-contrast w-3/4)`}
`
