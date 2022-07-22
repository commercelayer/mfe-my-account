import { Settings } from "HostedApp"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, useContext } from "react"

import { AppContext } from "components/data/AppProvider"

import { Wrapper, Icon, Wrapper2, Title } from "./styled"

type Props = Pick<Settings, "accessToken"> & {
  id: string
  title: string
  href: string
  icon: ReactNode
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
          <Wrapper2>
            <Title>{title}</Title>
          </Wrapper2>
        </Wrapper>
      </a>
    </Link>
  )
}

export default NavLink
