import type { Settings } from "HostedApp"
import { useEffect, useContext, useState } from "react"

import { Base } from "#components/ui/Base"
import { Card } from "#components/ui/Card"
import { Container } from "#components/ui/Container"
import { AppContext } from "#providers/AppProvider"

type LayoutDefaultProps = Pick<Settings, "isGuest"> & {
  aside: React.ReactNode | null
  main: React.ReactNode
}

export function LayoutDefault({
  main,
  aside,
  isGuest,
}: LayoutDefaultProps): JSX.Element {
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
          <div className="flex flex-wrap justify-end items-stretch flex-col max-w-screen-md mx-auto min-h-screen md:flex-row">
            <div id="main" className="flex-none justify-center order-first h-screen md:flex-1 md:order-last md:h-auto">
              <Card fullHeight centered>
                {main}
              </Card>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-end items-stretch flex-col min-h-screen md:flex-row">
            <div className="hidden lg:inline bg-gray-50">
              <div className="flex-none lg:flex-1 lg:h-full">{aside}</div>
            </div>
            {ctx?.showMobileMenu && <div className="z-20 fixed top-16 left-0 bottom-0 flex flex-col min-w-full max-w-sm bg-white border-r overflow-y-auto lg:hidden">{aside}</div>}
            <div id="main" className="flex-none justify-center order-first h-screen md:flex-1 md:order-last md:h-auto">
              <Card fullHeight centered>
                {main}
              </Card>
            </div>
          </div>
        )}
      </Container>
    </Base>
  )
}
