import styled from "styled-components"
import tw from "twin.macro"

export const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full p-5 lg:(p-15 sticky top-8) xl:pl-48 bg-gray-50 md:bg-white`}
`
export const Wrapper = styled.div`
  ${tw`lg:(sticky top-8)`}
`

export const LogoWrapper = styled.div`
  ${tw`w-full`}
`

export const MenuWrapper = styled.div`
  ${tw`mt-5 w-sidebar md:(flex-1)`}
`

export const EmailWrapper = styled.div`
  ${tw`text-sm my-6 md:(hidden) text-xs text-gray-500`}
`

export const Email = styled.span`
  ${tw`block mt-0.5 font-bold text-black`}
`

export const Nav = styled.nav`
  ${tw`md:(my-8) lg:(my-16)`}
`
