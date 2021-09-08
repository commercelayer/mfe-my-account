import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  id: string
  title: string
  href: string
  accessToken: string
  icon: ReactNode
}

const NavLink: React.FC<Props> = ({ title, href, accessToken, icon }) => {
  const router = useRouter()
  const isCurrentPage = router.pathname === href

  return (
    <MenuItem isCurrentPage={isCurrentPage}>
      <Icon>{icon}</Icon>
      <Link href={`${href}?accessToken=${accessToken}`}>{title}</Link>
    </MenuItem>
  )
}

export default NavLink

interface MenuItemProps {
  isCurrentPage: boolean
}

export const MenuItem = styled.li<MenuItemProps>`
  ${tw`flex items-center text-md font-semibold h-14 text-gray-500 pl-5 active:(bg-gray-100) xl:(w-64 self-end)`}
  ${({ isCurrentPage }) => isCurrentPage && tw`text-black`}
`

export const Icon = styled.div`
  ${tw`pr-3`}
`
