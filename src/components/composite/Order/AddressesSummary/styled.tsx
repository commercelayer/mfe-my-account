import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`flex flex-col md:flex-row justify-between gap-8`}
`

export const AddressesTitle = styled.p`
  ${tw`uppercase text-gray-400 font-semibold text-xs mb-4`}
`

export const BillingAddress = styled.div`
  ${tw` md:w-1/2`}
`

export const ShippingAddress = styled.div`
  ${tw` md:w-1/2`}
`
