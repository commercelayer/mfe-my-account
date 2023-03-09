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
  ${tw`flex items-center gap-1 min-h-[20px] leading-[20px]`}
`

export const PaymentSourceNumberPrimary = styled.span`
  ${tw`text-[15px] leading-[20px] font-bold text-black`}
`

export const PaymentSourceNumberSecondary = styled.span`
  ${tw`antialiased text-[13px] leading-[20px] text-gray-400 mt-[4px]`}
`
