import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`flex flex-col md:flex-row justify-between`}
`

export const AddressesTitle = styled.p`
  ${tw`uppercase text-gray-400 font-semibold text-xs mb-2`}
`

export const BillingAddress = styled.div`
  ${tw``}
`

export const ShippingAddress = styled.div`
  ${tw``}
`
