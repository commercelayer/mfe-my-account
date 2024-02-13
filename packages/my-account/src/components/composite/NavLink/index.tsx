import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useRouter, useLocation, Link } from "wouter"

import { Wrapper, Icon, TitleWrapper, Title, ComingSoon } from "./styled"

import { AppContext } from "#providers/AppProvider"

type Props = Pick<Settings, "accessToken"> & {
  id: string
  title: string
  href: string
  icon: React.ReactNode
  comingSoon?: boolean
  hidden?: boolean
  onClick?: () => void
}

function ComingSoonBadge(): JSX.Element {
  return <ComingSoon>Soon</ComingSoon>
}

function NavLinkButton(props: Props): JSX.Element {
  const { id, title, href, icon, comingSoon, hidden = false, onClick } = props
  const router = useRouter()
  const [location] = useLocation()
  const hrefWithoutBase = href.replace(router.base, "").split("?")[0]
  const isCurrentPage = location.indexOf(hrefWithoutBase) >= 0

  return (
    <Wrapper
      isCurrentPage={isCurrentPage}
      comingSoon={comingSoon}
      hidden={hidden}
      onClick={onClick}
      aria-label={id}
      disabled={comingSoon} 
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
