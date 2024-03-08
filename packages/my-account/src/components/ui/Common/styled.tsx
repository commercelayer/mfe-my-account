import styled from "styled-components"
import tw from "twin.macro"

export const SrOnly = styled.span`
  ${tw`sr-only`}
`
export const FooterWrapper = styled.div`
  ${tw`absolute bottom-0 block lg:hidden pb-2`}
`
export const DesktopOnly = styled.div`
  ${tw`hidden lg:block`}
`
export const MobileOnly = styled.div`
  ${tw`block lg:hidden`}
`
export const Flex = styled.div`
  ${tw`flex`}
`
export const DateWrapper = styled.p`
  ${tw`block text-sm text-gray-500 mb-2`}
`
export const LittleDateWrapper = styled.p`
  ${tw`block text-xs text-gray-500 mb-2`}
`
export const PageTitle = styled.h2`
  ${tw`block text-lg font-medium`}
`
export const PageSecondaryTitle = styled.h4`
  ${tw`block text-sm font-medium text-gray-500`}
`