import styled from "styled-components"
import tw from "twin.macro"

import type { LabelProps } from "."

export const Wrapper = styled.div`
  ${tw`flex items-center px-2 py-4 bg-white hover:bg-gray-200 cursor-default`}
`

export const IconWrapper = styled.div`
  ${tw`flex items-center px-2`}
`

export const Label = styled.p<LabelProps>`
  ${tw`text-[12px] select-none`}
  ${({ icon }) => {
    return !icon && tw`ml-7`
  }}
  ${({ variant }) => {
    return variant === "warning" && tw`text-red-400`
  }}
`
