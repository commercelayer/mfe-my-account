import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`w-full flex flex-row p-1 my-4 justify-center items-center text-center bg-contrast text-gray-450 border border-dashed border-gray-350 rounded cursor-pointer shadow-sm hover:(border-primary) lg:(mt-0)`}
`

export const Svg = styled.svg`
  ${tw`w-6 h-6 group-hover:(text-primary)`}
`

export const Label = styled.p`
  ${tw`text-ss text-gray-500 font-medium group-hover:(text-primary)`}
`
