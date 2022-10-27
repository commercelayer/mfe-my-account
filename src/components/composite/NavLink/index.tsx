import type { Settings } from "HostedApp"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"

import { Wrapper, Icon, TitleWrapper, Title } from "./styled"

import { AppContext } from "src/providers/AppProvider"

type Props = Pick<Settings, "accessToken"> & {
  id: string
  title: string
  href: string
  icon: React.ReactNode
  onClick?: () => void
}

const NavLink: React.FC<Props> = ({
  title,
  href,
  accessToken,
  icon,
  onClick,
}) => {
  const router = useRouter()

  const isCurrentPage =
    router.pathname === href || router.pathname.indexOf(href) >= 0

  const ctx = useContext(AppContext)

  return (
    <Link href={`${href}?accessToken=${accessToken}`}>
      <a onClick={() => ctx?.closeMobileMenu()}>
        <Wrapper isCurrentPage={isCurrentPage} onClick={onClick}>
          <Icon>{icon}</Icon>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
        </Wrapper>
      </a>
    </Link>
  )
}

export default NavLink
