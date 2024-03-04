import styled from "styled-components"
import tw from "twin.macro"

export const StyledOrderList = styled.td`
  ${tw`relative w-full mb-8`}
`

export const OrderListWrapper = styled.div`
  ${tw`-mx-5 md:mx-auto`}
`

export const OrderNumber = styled.p`
  ${tw`text-sm font-semibold`}
`

export const OrderItemsCount = styled.p`
  ${tw`text-sm font-light text-gray-400`}
`

export const OrderDate = styled.p`
  ${tw`inline-block text-sm font-extralight text-gray-400 h-2 md:px-3 md:h-5 md:(bg-contrast px-0)`}
`

export const SubscriptionFrequency = styled.p`
  ${tw`capitalize inline-block text-sm font-extralight text-gray-400 px-3 h-5 md:(bg-contrast px-0)`}
`

export const SubscriptionNextRunAt = styled.p`
  ${tw`hidden md:inline-block text-sm font-extralight text-gray-400 px-3 h-5 md:(bg-contrast px-0)`}
`
