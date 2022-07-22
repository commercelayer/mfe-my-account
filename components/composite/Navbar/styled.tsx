import styled from "styled-components"
import tw from "twin.macro"

export const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full min-w-1/3 md:(p-5) lg:(pl-20 pr-10 pt-10) xl:(pl-48)`}
`

export const LogoWrapper = styled.div`
  ${tw`w-full`}
`

export const Wrapper = styled.div`
  ${tw`mt-5 md:(mt-32 flex-1)`}
`

export const EmailWrapper = styled.div`
  ${tw`text-sm my-6 md:(hidden) text-xs text-gray-500`}
`

export const Email = styled.span`
  ${tw`block mt-0.5 font-bold text-black`}
`

export const Nav = styled.nav`
  ${tw`md:(mt-8) lg:(mt-16)`}
`
