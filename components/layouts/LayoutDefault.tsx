import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { useEffect, useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { AppContext } from "components/data/AppProvider"
import { Base } from "components/ui/Base"
import { Card } from "components/ui/Card"
import { Container } from "components/ui/Container"

interface Props {
  isGuest: boolean
  aside: React.ReactNode | null
  main: React.ReactNode
}

export const LayoutDefault: React.FC<Props> = ({ main, aside, isGuest }) => {
  const ctx = useContext(AppContext)

  useEffect(() => {
    const main = document.getElementById("main")
    main &&
      (ctx?.showMobileMenu ? disableBodyScroll(main) : enableBodyScroll(main))
  }, [ctx?.showMobileMenu])

  return (
    <Base>
      <Container>
        {isGuest ? (
          <GuestWrapper>
            <Main id="main">
              <Card fullHeight centered>
                {main}
              </Card>
            </Main>
          </GuestWrapper>
        ) : (
          <Wrapper>
            <DesktopOnly>
              <Aside>{aside}</Aside>
            </DesktopOnly>
            {ctx?.showMobileMenu && <MobileMenu>{aside}</MobileMenu>}
            <Main id="main">
              <Card fullHeight>{main}</Card>
            </Main>
          </Wrapper>
        )}
      </Container>
    </Base>
  )
}

const GuestWrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col max-w-screen-md mx-auto min-h-full md:(h-screen flex-row)`}
`

const Wrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col min-h-full md:(h-screen flex-row)`}
`

const Main = styled.div`
  ${tw`flex-none justify-center order-first h-screen md:(flex-1 order-last h-auto)`}
`

const DesktopOnly = styled.div`
  ${tw`hidden md:(inline bg-gray-100)`}
`

const Aside = styled.div`
  ${tw`flex-none md:(flex-1 h-full)`}
`

const MobileMenu = styled.div`
  ${tw`z-10 fixed top-19 left-0 bottom-0 flex flex-col min-w-full max-w-sm py-6 px-5 md:px-6 bg-white border-r overflow-y-auto md:(hidden)`}
`
