import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  href: string
  accessToken: string
  icon: ReactNode
}

const NavLink: React.FC<Props> = ({ href, accessToken, icon, children }) => {
  const router = useRouter()
  const isCurrentPage = router.pathname === href

  return (
    <MenuItem isCurrentPage={isCurrentPage}>
      {icon}
      <Link href={`${href}?accessToken=${accessToken}`}>{children}</Link>
    </MenuItem>
  )
}

export default NavLink

interface MenuItemProps {
  isCurrentPage: boolean
}

export const MenuItem = styled.div<MenuItemProps>`
  ${tw`flex text-base font-bold h-10 text-gray-500`}
  ${({ isCurrentPage }) => isCurrentPage && tw`text-black`}
`
