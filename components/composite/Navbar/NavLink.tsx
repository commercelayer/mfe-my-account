import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, Dispatch } from "react"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  id: string
  title: string
  description: string
  href: string
  accessToken: string
  icon: ReactNode
  onClick?: Dispatch<any>
}

const NavLink: React.FC<Props> = ({
  title,
  description,
  href,
  accessToken,
  icon,
  onClick,
}) => {
  const router = useRouter()
  
  const isCurrentPage = router.pathname === href || router.pathname.indexOf(href) >= 0 

  return (
    <Link href={`${href}?accessToken=${accessToken}`}>
      <Wrapper isCurrentPage={isCurrentPage} onClick={onClick}>
        <Icon>{icon}</Icon>
        <Wrapper2>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Wrapper2>
      </Wrapper>
    </Link>
  )
}

export default NavLink

interface WrapperProps {
  isCurrentPage: boolean
}

export const Wrapper = styled.li<WrapperProps>`
  ${tw`flex h-12 md:h-14 items-center content-center sm:text-black md:text-gray-500 hover:(cursor-pointer bg-white rounded-xl) active:(bg-gray-100) xl:(w-64 self-end)`}
  ${({ isCurrentPage }) => isCurrentPage && tw`md:text-black`}
`

export const Icon = styled.div`
  ${tw`mr-2 md:mr-3 md:px-3`}
`

export const Wrapper2 = styled.div`
  ${tw`flex-col pr-3`}
`

export const Title = styled.p`
  ${tw`text-sm md:text-base font-semibold`}
`

export const Description = styled.p`
  ${tw`text-ss`}
`
