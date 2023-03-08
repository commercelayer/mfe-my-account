import styled from "styled-components"
import tw from "twin.macro"

export const PaymentSourceBrandIconWrapper = styled.div`
  ${tw` `}
`

export const PaymentSourceBrandNameWrapper = styled.div`
  ${tw`flex flex-col w-full text-sm `}
`

export const PaymentSourceTextWrapper = styled.div`
  ${tw`flex gap-1`}
`

export const PaymentSourceTextPrimary = styled.div`
  ${tw`font-bold break-all`}
`

export const PaymentSourceTextSecondary = styled.div`
  ${tw`font-light text-gray-500`}
`

export const PaymentSourceNumberWrapper = styled.div`
  ${tw`flex gap-1 leading-[14px]`}
`

export const PaymentSourceNumberPrimary = styled.span`
  ${tw`text-base leading-[16px] font-bold`}
`

export const PaymentSourceNumberSecondary = styled.span`
  ${tw`font-light text-[13px] text-gray-500 leading-[13px]`}
`
