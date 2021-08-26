import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, Dispatch } from "react"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  id: string
  title: string
  href: string
  accessToken: string
  icon: ReactNode
  onClick?: Dispatch<any>
}

const NavLink: React.FC<Props> = ({
  title,
  href,
  accessToken,
  icon,
  onClick,
}) => {
  const router = useRouter()
  const isCurrentPage = router.pathname === href

  return (
    <Link href={`${href}?accessToken=${accessToken}`}>
      <Wrapper isCurrentPage={isCurrentPage} onClick={onClick}>
        <Icon>{icon}</Icon>
        {title}
      </Wrapper>
    </Link>
  )
}

export default NavLink

interface WrapperProps {
  isCurrentPage: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${tw`flex items-center text-md font-semibold h-14 text-gray-500 pl-5 hover:(cursor-pointer) active:(bg-gray-100) xl:(w-64 self-end)`}
  ${({ isCurrentPage }) => isCurrentPage && tw`text-black`}
`

export const Icon = styled.div`
  ${tw`mr-3`}
`
