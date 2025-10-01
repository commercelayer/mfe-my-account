import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useRouter, useLocation, Link } from "wouter"

import { AppContext } from "#providers/AppProvider"

type Props = Partial<Pick<Settings, "accessToken">> & {
  id: string
  title: string
  href: string
  icon: React.ReactNode
  comingSoon?: boolean
  hidden?: boolean
  onClick?: () => void
}

function ComingSoonBadge(): JSX.Element {
  return <span className="ml-1 uppercase px-[4px] py-[2px] text-[9px] leading-[9px] font-bold rounded text-white bg-orange-400">Soon</span>
}

interface WrapperProps extends Pick<Props, 'onClick' | 'hidden' | 'comingSoon'> {
  isCurrentPage?: boolean
  ariaLabel: string
  children: React.ReactNode
}

function Wrapper(props: WrapperProps): JSX.Element {
  const { isCurrentPage, comingSoon, hidden, ariaLabel, children, onClick } = props
  const classNames = `flex h-8 items-center select-none
    ${ hidden ? 'hidden' : '' }
    ${ comingSoon ? 'text-gray-400' : 'text-gray-500 hover:cursor-pointer hover:text-gray-600' }
    ${ isCurrentPage ? 'text-black' : '' }
  `
  return (
    <button
      className={classNames} 
      disabled={comingSoon}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

function NavLinkButton(props: Props): JSX.Element {
  const { id, title, href, icon, comingSoon, hidden = false, onClick } = props
  const router = useRouter()
  const [location] = useLocation()
  const hrefWithoutBase = href.replace(router.base, "").split("?")[0]
  const isCurrentPage = location.indexOf(hrefWithoutBase) >= 0

  return (
    <Wrapper
      ariaLabel={id}
      isCurrentPage={isCurrentPage}
      comingSoon={comingSoon}
      hidden={hidden}
      onClick={onClick}
    >
      <div className={`mr-2 ${comingSoon ? "text-gray-300" : ""}`}>{icon}</div>
      <div className="flex items-center pr-3">
        <p className="text-sm md:text-base font-semibold">{title}</p>
        {comingSoon && <ComingSoonBadge />}
      </div>
    </Wrapper>
  )
}

function NavLink(props: Props): JSX.Element {
  const { href, comingSoon } = props
  const ctx = useContext(AppContext)
  
  const LinkComponent = href.includes("://") ? "a" : Link;

  if (comingSoon) return <NavLinkButton {...props} />


  return (
    <LinkComponent
      href={href}
      onClick={() => ctx?.closeMobileMenu()}
    >
      <NavLinkButton {...props} />
    </LinkComponent>
  )
}

export default NavLink
