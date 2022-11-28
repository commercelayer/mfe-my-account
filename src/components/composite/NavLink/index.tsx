import type { Settings } from "HostedApp"
import { useLocation, useRoute, Link } from "wouter"
import { useContext } from "react"

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

const ComingSoonBadge: React.FC = () => {
  return <ComingSoon>Soon</ComingSoon>
}

const NavLinkButton: React.FC<Props> = (props) => {
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

const NavLink: React.FC<Props> = (props) => {
  const { href, accessToken, comingSoon } = props

  const ctx = useContext(AppContext)

  if (comingSoon) return <NavLinkButton {...props} />

  return (
    <Link href={`${href}?accessToken=${accessToken}`}>
      <a onClick={() => ctx?.closeMobileMenu()}>
        <NavLinkButton {...props} />
      </a>
    </Link>
  )
}

export default NavLink
