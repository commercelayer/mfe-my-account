import styled from "styled-components"
import tw from "twin.macro"

export const ShipmentContainer = styled.div`
  ${tw``}
`

export const ShipmentHeader = styled.div`
  ${tw`mt-3`}
`

export const ShipmentHeaderTop = styled.div`
  ${tw`flex items-start content-start`}
`

export const BackToOrder = styled.div`
  ${tw`flex-none rounded-full border border-gray-300 p-1 hover:bg-gray-300 cursor-pointer `}
`

export const Title = styled.h2`
  ${tw`ml-4 p-1 text-lg font-medium`}
`

export const ShipmentHeaderMain = styled.div`
  ${tw`md:pl-12 flex flex-auto justify-between`}
`

export const ShipmentHeaderCol = styled.div`
  ${tw``}
`

export const ShipmentHeaderLabel = styled.label`
  ${tw`block uppercase text-xs text-gray-300 font-bold`}
`

export const ShipmentHeaderValue = styled.span`
  ${tw`block text-sm font-bold`}
`

export const ShipmentRows = styled.div`
  ${tw`mt-10 -mx-5 px-5 pb-10 pt-10`}
`

export const ShipmentRow = styled.div`
  ${tw``}
`

export const ShipmentDateChip = styled.div`
  ${tw`inline text-sm text-center text-gray-600 bg-gray-300 capitalize text-3xs w-auto uppercase font-bold py-[2px] px-[12px] leading-snug rounded-xl align-middle`}
`
