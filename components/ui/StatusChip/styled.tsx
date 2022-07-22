import styled from "styled-components"
import tw from "twin.macro"

interface StatusChipProps {
  status: string
}

const COMPLETED_COLOR = "green-400"
const COMPLETED_COLOR_BG = "green-100"
const INPROGRESS_COLOR = "yellow-400"
const INPROGRESS_COLOR_BG = "yellow-100"

const handlerStatusColor = (status: string) => {
  switch (status) {
    case "placed": // Orders
    case "approved": // Orders
    case "shipped": // Shipments
    case "received": // Returns
      return tw`text-${COMPLETED_COLOR} bg-${COMPLETED_COLOR_BG}`
    default:
      return tw`text-${INPROGRESS_COLOR} bg-${INPROGRESS_COLOR_BG}`
  }
}

export const StatusChipWrapper = styled.p<StatusChipProps>(({ status }) => {
  return [
    handlerStatusColor(status),
    tw`inline text-sm text-center capitalize text-3xs w-auto uppercase font-bold py-[2px] px-[8px] leading-snug rounded-xl align-middle`,
  ]
})
