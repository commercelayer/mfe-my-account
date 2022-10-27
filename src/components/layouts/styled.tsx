import styled from "styled-components"
import tw from "twin.macro"

export const GuestWrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col max-w-screen-md mx-auto min-h-full md:(h-screen flex-row)`}
`

export const CustomerWrapper = styled.div`
  ${tw`flex flex-wrap justify-end items-stretch flex-col min-h-full md:(h-screen flex-row)`}
`

export const Main = styled.div`
  ${tw`flex-none justify-center order-first h-screen md:(flex-1 order-last h-auto)`}
`

export const DesktopOnly = styled.div`
  ${tw`hidden md:(inline bg-gray-100)`}
`

export const Aside = styled.div`
  ${tw`flex-none md:(flex-1 h-full)`}
`

export const MobileMenu = styled.div`
  ${tw`z-10 fixed top-19 left-0 bottom-0 flex flex-col min-w-full max-w-sm py-6 px-5 md:px-6 bg-white border-r overflow-y-auto md:(hidden)`}
`
