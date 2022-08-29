import styled from "styled-components"
import tw from "twin.macro"

import { TabHeaderProps } from "./"

export const Wrapper = styled.div`
  ${tw``}
`
export const HeaderWrapper = styled.div`
  ${tw`flex`}
`
export const TabHeader = styled.div<TabHeaderProps>`
  ${tw`flex items-center uppercase text-center select-none font-semibold h-11 rounded-md shadow-sm cursor-pointer px-5 h-6 text-3xs transition ease duration-500 border border-gray-300`}
  ${({ isActive }) =>
    isActive ? tw`bg-primary text-white` : tw`bg-gray-200 text-gray-600`}
  ${({ isFirst }) => isFirst && tw`rounded-r-none border-r-0`}
  ${({ isLast }) => isLast && tw`rounded-l-none`}
  ${({ isFirst, isLast }) =>
    !isFirst && !isLast && tw`rounded-l-none rounded-r-none`}
`
export const ContentWrapper = styled.div`
  ${tw`transition ease duration-500`}
`
export const TabContent = styled.div`
  ${tw`transition ease duration-500`}
`
