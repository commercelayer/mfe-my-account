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
