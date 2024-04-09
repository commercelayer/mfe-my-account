import styled from "styled-components"
import tw from "twin.macro"

export const LineItemWrapper = styled.div`
  ${tw`relative flex flex-row w-full mb-6 not-last-of-type:border-b`}
`
export const LineItemContent = styled.div`
  ${tw`flex justify-between w-full pl-4 md:pl-8`}
`
export const LineItemDescription = styled.div`
  ${tw`flex flex-col justify-between`}
`
export const LineItemSku = styled.div`
  ${tw`flex gap-1 text-xs text-gray-600 font-semibold h-4`}
`
export const LineItemQty = styled.span`
  ${tw`self-start w-auto text-xs font-semibold ring ring-inset ring-1 ring-gray-100 bg-gray-100 text-gray-600 py-[4px] px-[10px] rounded`}
`
export const LineItemFrequency = styled(LineItemQty)`
  ${tw`mt-2 flex bg-white ring-primary text-primary lg:mt-0`}
`
