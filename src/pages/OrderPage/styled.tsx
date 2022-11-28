import styled from "styled-components"
import tw from "twin.macro"

interface OrderWrapperProps {
  hidden?: boolean
}

export const OrderWrapper = styled.div<OrderWrapperProps>`
  ${tw``}
  ${({ hidden }) => hidden && tw`hidden`}
`

export const OrderAccordionWrapper = styled.div`
  ${tw`px-5 w-full md:(px-0)`}
`

export const OrderHeader = styled.div`
  ${tw`flex justify-between mt-3`}
`

export const OrderHeaderMain = styled.div`
  ${tw``}
`

export const OrderTitle = styled.h2`
  ${tw`block text-lg font-medium`}
`

export const OrderDescription = styled.p`
  ${tw`block text-sm text-gray-500 mb-2`}
`

export const OrderHeaderActions = styled.div`
  ${tw`flex justify-end`}
`

export const MobileOnly = styled.div`
  ${tw`md:(hidden)`}
`

export const DesktopOnly = styled.div`
  ${tw`hidden md:(flex gap-2 mt-2)`}
`
