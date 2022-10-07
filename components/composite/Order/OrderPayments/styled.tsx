import styled from "styled-components"
import tw from "twin.macro"

export const PaymentSourceWrapper = styled.div`
  ${tw`flex bg-gray-50 px-5 py-3 rounded`}
`

export const PaymentSourceBrandNameWrapper = styled.div`
  ${tw`flex justify-between w-full text-sm ml-3`}
`

export const PaymentSourceBrandNamePrimary = styled.span`
  ${tw`font-bold`}
`

export const PaymentSourceBrandNameSecondary = styled.span`
  ${tw`font-light text-gray-500`}
`
