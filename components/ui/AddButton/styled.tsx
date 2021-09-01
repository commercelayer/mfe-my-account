import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`w-full flex flex-row py-2 mt-4 justify-center items-center text-center px-2 bg-contrast text-gray-450 border border-dashed rounded cursor-pointer shadow-sm hover:(border-primary) lg:(w-22 flex-col mt-0)`}
`

export const Svg = styled.svg`
  ${tw`w-6 h-6 group-hover:(text-primary)`}
`

export const Label = styled.p`
  ${tw`text-xs text-gray-500 group-hover:(text-primary)`}
`
