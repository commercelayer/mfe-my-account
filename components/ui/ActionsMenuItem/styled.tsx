import styled from "styled-components"
import tw from "twin.macro"

import { LabelProps } from "./"

export const Wrapper = styled.div`
  ${tw`flex items-center py-4 bg-white hover:bg-gray-200`}
`

export const IconWrapper = styled.div`
  ${tw`flex items-center`}
`

export const Label = styled.p<LabelProps>`
  ${tw`text-3xs`}
  ${({ icon }) => {
    return !icon && tw`ml-5`
  }}
  ${({ variant }) => {
    return variant === "warning" && tw`text-red-400`
  }}
`
