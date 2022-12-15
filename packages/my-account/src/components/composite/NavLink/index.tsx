import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useLocation, useRoute, Link } from "wouter"

import { Wrapper, Icon, TitleWrapper, Title, ComingSoon } from "./styled"

import { AppContext } from "#providers/AppProvider"

type Props = Pick<Settings, "accessToken"> & {
  id: string
  title: string
  href: string
  icon: React.ReactNode
  comingSoon?: boolean
  onClick?: () => void
}

function ComingSoonBadge(): JSX.Element {
  return <ComingSoon>Soon</ComingSoon>
}

function NavLinkButton(props: Props): JSX.Element {
  const { title, href, icon, comingSoon, onClick } = props
  const [location] = useLocation()
  const [isActive] = useRoute(href)
  const isCurrentPage = isActive || location.indexOf(href) >= 0

  return (
    <Wrapper
      isCurrentPage={isCurrentPage}
      comingSoon={comingSoon}
      onClick={onClick}
    >
      <Icon comingSoon={comingSoon}>{icon}</Icon>
      <TitleWrapper>
        <Title>{title}</Title>
        {comingSoon && <ComingSoonBadge />}
      </TitleWrapper>
    </Wrapper>
  )
}

function NavLink(props: Props): JSX.Element {
  const { href, accessToken, comingSoon } = props

  const ctx = useContext(AppContext)

  if (comingSoon) return <NavLinkButton {...props} />

  return (
    <Link
      href={`${href}?accessToken=${accessToken}`}
      onClick={() => ctx?.closeMobileMenu()}
    >
      <NavLinkButton {...props} />
    </Link>
  )
}

export default NavLink
