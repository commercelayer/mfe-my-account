import styled from "styled-components"
import tw from "twin.macro"

export const HeaderContainer = styled.header`
  ${tw`flex border-b-2 bg-white border-gray-300 mb-8 -mx-5 md:(-mx-0 pb-2.5 border-b) lg:(mb-16)`}
`

export const Wrapper = styled.div`
  ${tw`flex flex-1 justify-between p-5 md:(p-0)`}
`

export const User = styled.div`
  ${tw`flex items-center`}
`

export const Title = styled.h1`
  ${tw`hidden text-xxl font-medium md:(inline)`}
`

export const Email = styled.p`
  ${tw`hidden text-sm text-gray-500 mr-3 font-medium md:(inline)`}
`
