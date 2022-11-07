import styled from "styled-components"
import tw from "twin.macro"

export const Svg = styled.svg`
  ${tw`text-gray-600`}
`

export const Wrapper = styled.div`
  ${tw`flex py-3 bg-inherit text-xs text-gray-500 -mx-5 px-5 lg:(mx-0 border-t border-gray-300 z-20 px-0 pb-3 mt-20) overflow-hidden z-10`}
`

export const LogoWrapper = styled.div`
  ${tw`flex flex-col gap-2`}
`

export const ListWrapper = styled.div`
  ${tw`overflow-hidden`}
`

export const ListLink = styled.ul`
  ${tw`flex flex-row flex-wrap justify-between -ml-0.5`}
`

export const ListItem = styled.li`
  ${tw`flex-grow px-1.5 md:px-4 border-l font-medium`}
`
