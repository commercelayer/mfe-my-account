import styled from "styled-components"
import tw from "twin.macro"

export const OrderSubscriptionStackWrapper = styled.div`
  ${tw`relative mt-8`}
`

export const OrderSubscriptionStackItemWrapper = styled.div`
  ${tw`flex flex-col gap-2`}
`

interface OrderSubscriptionStackItemValueProps {
  capitalize?: boolean
}
export const OrderSubscriptionStackItemValue = styled.h4<OrderSubscriptionStackItemValueProps>`
  ${tw`block text-base font-medium`}
  ${({ capitalize }) => capitalize && tw`capitalize`}
`
