import styled from "styled-components"
import tw from "twin.macro"

export const TotalWrapper = styled.div`
  ${tw`flex flex-row py-6 text-sm`}
`
export const AmountWrapper = styled.div`
  ${tw`flex flex-col flex-1 lg:pl-8`}
`
export const AmountSpacer = styled.div`
  ${tw`hidden lg:flex lg:flex-85`}
`
export const RecapLine = styled.div`
  ${tw`flex flex-row justify-between`}

  &:empty {
    ${tw`hidden`}
  }
`
export const RecapLineItem = styled.p`
  ${tw``}
`
export const RecapLineTotal = styled(RecapLine)`
  ${tw`border-t border-gray-300 mt-7 pt-6`}
`
export const RecapLineItemTotal = styled(RecapLineItem)`
  ${tw`text-xl font-normal invisible lg:visible`}
`
