import { Settings } from "HostedApp"
import { useEffect, useContext, useState } from "react"

import { AppContext } from "components/data/AppProvider"
import { Base } from "components/ui/Base"
import { Card } from "components/ui/Card"
import { Container } from "components/ui/Container"

import {
  GuestWrapper,
  Main,
  CustomerWrapper,
  DesktopOnly,
  Aside,
  MobileMenu,
} from "./styled"

type LayoutDefaultProps = Pick<Settings, "isGuest"> & {
  aside: React.ReactNode | null
  main: React.ReactNode
}

export const LayoutDefault: React.FC<LayoutDefaultProps> = ({
  main,
  aside,
  isGuest,
}) => {
  const ctx = useContext(AppContext)
  const [noScrollClassname, setNoScrollClassName] = useState("")

  useEffect(() => {
    ctx?.showMobileMenu
      ? setNoScrollClassName("overflow-hidden")
      : setNoScrollClassName("")
  }, [ctx?.showMobileMenu])

  return (
    <Base className={noScrollClassname}>
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
          <CustomerWrapper>
            <DesktopOnly>
              <Aside>{aside}</Aside>
            </DesktopOnly>
            {ctx?.showMobileMenu && <MobileMenu>{aside}</MobileMenu>}
            <Main id="main">
              <Card fullHeight centered>
                {main}
              </Card>
            </Main>
          </CustomerWrapper>
        )}
      </Container>
    </Base>
  )
}
