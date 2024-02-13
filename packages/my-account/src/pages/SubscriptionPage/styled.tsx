import styled from "styled-components"
import tw from "twin.macro"

interface OrderWrapperProps {
  hidden?: boolean
}

export const OrderWrapper = styled.div<OrderWrapperProps>`
  ${tw``}
  ${({ hidden }) => hidden && tw`hidden`}
`

export const OrderSubscriptionHeader = styled.div`
  ${tw`flex justify-between mt-3`}
`

export const OrderSubscriptionHeaderMain = styled.div`
  ${tw``}
`

export const OrderHeaderActions = styled.div`
  ${tw`flex justify-end`}
`

export const OrderSubscriptionNextRunWrapper = styled.div`
  ${tw`relative mt-8 pt-8 border-t`}
`

export const OrderSubscriptionNextRunProgressWrapper = styled.div`
  ${tw`relative pt-8 text-xs`}
`

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

export const OrderAccordionWrapper = styled.div`
  ${tw`px-5 w-full md:(px-0)`}
`
