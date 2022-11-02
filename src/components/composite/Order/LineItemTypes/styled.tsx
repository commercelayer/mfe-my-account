import styled from "styled-components"
import tw from "twin.macro"

export const LineItemWrapper = styled.div`
  ${tw`flex flex-row w-full pt-6 pb-8 border-b`}
`
export const LineItemContent = styled.div`
  ${tw`flex justify-between w-full pl-4 md:pl-8`}
`
export const LineItemDescription = styled.div`
  ${tw``}
`
export const LineItemSku = styled.div`
  ${tw`flex gap-1 text-xs text-gray-600 font-semibold h-4`}
`
export const LineItemQty = styled.span`
  ${tw`text-xs font-semibold uppercase bg-gray-300 text-gray-600 py-[4px] px-[12px] rounded-full`}
`
