import styled from "styled-components"
import tw from "twin.macro"

export const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full p-5 lg:(p-15 sticky top-8) xl:pl-48`}
`
export const Wrapper = styled.div`
  ${tw`lg:(sticky top-8)`}
`

export const LogoWrapper = styled.div`
  ${tw`w-full h-auto lg:h-[50px]`}
`

export const FooterWrapper = styled.div`
  ${tw`hidden lg:block`}
`

export const MenuWrapper = styled.div`
  ${tw`mt-5 w-sidebar md:(flex-1)`}
`

export const EmailWrapper = styled.div`
  ${tw`text-sm my-6 lg:(hidden) text-xs text-gray-500`}
`

export const Email = styled.span`
  ${tw`block mt-0.5 font-bold text-black`}
`

export const Nav = styled.nav`
  ${tw`md:(my-8) lg:(my-16)`}
`
