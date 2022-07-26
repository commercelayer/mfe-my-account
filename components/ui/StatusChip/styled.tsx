import styled from "styled-components"
import tw from "twin.macro"

interface StatusChipProps {
  status: string
}

const handlerStatusColor = (status: string) => {
  switch (status) {
    case "placed": // Orders
    case "approved": // Orders
    case "shipped": // Shipments
    case "received": // Returns
      return tw`text-green-400 bg-green-100`
    default:
      return tw`text-yellow-400 bg-yellow-100`
  }
}

export const StatusChipWrapper = styled.p<StatusChipProps>(({ status }) => {
  return [
    handlerStatusColor(status),
    tw`inline text-sm text-center capitalize text-3xs w-auto uppercase font-bold py-[2px] px-[8px] leading-snug rounded-xl align-middle`,
  ]
})
