import { Tab, TabList } from "react-tabs"
import styled from "styled-components"
import tw from "twin.macro"

export const StyledTabList = styled(TabList)`
  ${tw`flex`}
`
export const StyledTab = styled(Tab)`
  ${tw`flex items-center uppercase text-center select-none font-semibold h-11 shadow-sm cursor-pointer px-5 h-6 text-3xs transition ease duration-500 border border-r-0 border-gray-300 first:(rounded-l-md) last:(rounded-r-md border-r) focus:outline-none`}
`
