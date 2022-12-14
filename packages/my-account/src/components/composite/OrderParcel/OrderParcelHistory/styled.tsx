import styled from "styled-components"
import tw from "twin.macro"

export const ShipmentDates = styled.div`
  ${tw`mt-12 -mx-5 px-5 pb-10`}
`
export const ShipmentDate = styled.div`
  ${tw`mt-8`}
`
export const ShipmentDateChip = styled.div`
  ${tw`inline text-sm text-center text-gray-600 bg-gray-300 capitalize text-3xs w-auto uppercase font-bold py-[2px] px-[12px] leading-snug rounded-xl align-middle`}
`
interface ShipmentTimeProps {
  timeIsFirstOfDate: boolean
}
export const ShipmentTime = styled.div<ShipmentTimeProps>`
  ${tw`relative flex items-start pb-4 mt-4 ml-5 text-left`}
  ${({ timeIsFirstOfDate }) => timeIsFirstOfDate && tw`mt-8`}
`
export const ShipmentTimeLabel = styled.div`
  ${tw`mt-1 font-bold w-28 text-xxs`}
`
interface ShipmentTimeBorderProps {
  dateTimeIsLast: boolean
}
export const ShipmentTimeBorder = styled.div<ShipmentTimeBorderProps>`
  ${tw`absolute z-10 h-full border-r border-gray-300 left-20 top-2`}
  ${({ dateTimeIsLast }) => dateTimeIsLast && tw`border-dashed`}
  ${({ dateTimeIsLast }) =>
    dateTimeIsLast &&
    tw`before:(border-[#e6e7e7] border-t-0 border-r-0 border-b-[1px] border-l-[1px] content-[""] h-[8px] w-[8px] absolute top-[25px] left-[-3.5px] rotate-135 )`}
`

export const ShipmentTimeIconWrapper = styled.div`
  ${tw`absolute -ml-3 bg-gray-50 md:bg-white -top-2 pb-2`}
`
export const ShipmentTimeIconBg = styled.div`
  ${tw`absolute -ml-3 -top-2`}
`
export const ShipmentTimeContentWrapper = styled.div`
  ${tw`relative block`}
`
export const ShipmentTimeStatusWrapper = styled.div`
  ${tw`font-bold`}
`
export const ShipmentTimeMessageWrapper = styled.div`
  ${tw`w-40 text-sm text-gray-400 md:w-auto`}
`
export const ShipmentTimeLocationWrapper = styled.div`
  ${tw`text-sm font-bold`}
`
