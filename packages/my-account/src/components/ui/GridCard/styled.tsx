import styled from "styled-components"
import tw from "twin.macro"

import type { GridCardHover } from "./index"

interface WrapperProps {
  hover?: GridCardHover
}

export const Wrapper = styled.div<WrapperProps>`
  ${tw`rounded-[5px] border border-gray-200 p-[1px] bg-white`}
  ${({ hover }) =>
    hover === undefined &&
    tw`hover:(border-primary border-2 shadow-sm-primary p-0)`}
`
export const Content = styled.div`
  ${tw`p-4`}
`
