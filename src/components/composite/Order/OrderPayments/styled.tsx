import styled from "styled-components"
import tw from "twin.macro"

export const PaymentSourceWrapper = styled.div`
  ${tw`flex items-center bg-gray-50 px-4 h-[52px] rounded`}
`

export const PaymentSourceBrandNameWrapper = styled.div`
  ${tw`flex flex-col w-full text-sm ml-6`}
`

export const PaymentSourceBrandNamePrimary = styled.span`
  ${tw`font-bold pr-1 break-all`}
`

export const PaymentSourceBrandNameSecondary = styled.span`
  ${tw`font-light text-gray-500`}
`
