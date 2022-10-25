import styled from "styled-components"
import tw from "twin.macro"

export const LineItemWrapper = styled.div`
  ${tw`flex flex-row pt-6 pb-8 border-b`}
`
export const LineItemDescription = styled.div`
  ${tw`pl-4 flex flex-col flex-1 lg:pl-8`}
`
export const LineItemQty = styled.div`
  ${tw`text-xs uppercase mt-1 text-gray-500`}
`
