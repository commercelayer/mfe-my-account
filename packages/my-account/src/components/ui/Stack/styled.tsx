import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`border-t border-b border-gray-100 py-6`}
`

export const ChildWrapper = styled.div`
  ${tw`flex-1 flex flex-col items-start py-2 first:pl-0 last:pr-0 px-4 border-l border-gray-100 first:border-l-0`}
`
