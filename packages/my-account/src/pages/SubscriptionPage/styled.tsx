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

export const OrderAccordionWrapper = styled.div`
  ${tw`px-5 w-full md:(px-0)`}
`
