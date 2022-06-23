import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`w-full flex py-2 justify-center items-center text-center px-2 bg-white md:bg-transparent text-gray-500 border border-dashed border-gray-350 rounded cursor-pointer hover:border-gray-400 transition duration-200 ease-in`}
`

export const Label = styled.p`
  ${tw`text-xs`}
`
