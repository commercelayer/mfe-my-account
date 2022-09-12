import styled from "styled-components"
import tw from "twin.macro"

export const ShipmentWrapper = styled.div`
  ${tw`border-b border-gray-300 last:(border-b-0) pb-10 mb-10 last:(pb-8 mb-0)`}
`

export const ShipmentHeader = styled.div`
  ${tw`flex items-center`}
`

export const ShipmentCounter = styled.span`
  ${tw`font-bold text-gray-500 bg-gray-300 rounded-full py-0.5 px-1.5 text-[12px]`}
`

export const ShipmentHeaderRight = styled.div`
  ${tw`relative ml-3`}
`

export const ShipmentHeaderRightRow = styled.div`
  ${tw`flex items-center`}
`

export const ShipmentTitle = styled.span`
  ${tw`pr-6 text-sm font-bold`}
`

export const ShipmentShippingMethod = styled.span`
  ${tw`absolute left-0 text-sm text-gray-500 -bottom-5`}
`

export const ParcelsWrapper = styled.div`
  ${tw`ml-[0.85rem] border-l border-gray-300`}
`

export const ParcelWrapper = styled.div`
  ${tw`py-2 pl-7`}
`

export const ParcelHeader = styled.div`
  ${tw`flex items-center justify-between pt-10`}
`

export const ParcelTitle = styled.span`
  ${tw`relative pr-4 text-sm font-bold before:(bg-[#e6e7e7] content-[""] h-[1px] w-[20px] absolute top-[50%] left-[-28px]) max-w-1/3 md:max-w-full break-all`}
`

export const ParcelHeaderRight = styled.div`
  ${tw`flex`}
`

export const ParcelTrackingNumberWrapper = styled.div`
  ${tw`relative pl-10 mr-10 hidden md:block`}
`

export const ParcelTrackingNumberLabel = styled.label`
  ${tw`absolute right-0 font-bold text-right text-gray-300 uppercase -top-5 text-[12px]`}
`

export const ParcelTrackingNumberCode = styled.div`
  ${tw`text-sm font-bold text-right break-all`}
`

export const ParcelContent = styled.div`
  ${tw`py-3`}
`
