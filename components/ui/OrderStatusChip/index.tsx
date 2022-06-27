import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  status: string
}

const OrderStatusChip: React.FC<Props> = ({ status }) => {
  const { t } = useTranslation()

  return (
    <StatusChip status={status}>
      {t(`orderStatus.${status}`)}
    </StatusChip>
  )
}

export default OrderStatusChip

const COMPLETED_COLOR = "green-400"
const COMPLETED_COLOR_BG = "green-100"
const INPROGRESS_COLOR = "yellow-500"
const INPROGRESS_COLOR_BG = "yellow-100"
const PENDING_COLOR = "gray-500"
const DRAFT_COLOR = "gray-400"

interface StatusChipProps {
  status: string
}

export const StatusChip = styled.p<StatusChipProps>(({ status }) => {
  return [
    handlerStatusColor(status),
    tw`inline text-sm text-center capitalize text-3xs w-auto uppercase font-bold py-[2px] px-[8px] leading-snug rounded-xl align-middle`,
  ]
})

const handlerStatusColor = (status: string) => {
  switch (status) {
    case "placed":
      return tw`text-${COMPLETED_COLOR} bg-${COMPLETED_COLOR_BG}`
    case "inprogress":
      return tw`text-${INPROGRESS_COLOR} bg-${INPROGRESS_COLOR_BG}`
    case "pending":
      return tw`text-${PENDING_COLOR} bg-${PENDING_COLOR}`
    case "draft":
      return tw`text-${DRAFT_COLOR} bg-${DRAFT_COLOR}`
    default:
      return tw`text-${DRAFT_COLOR} bg-${DRAFT_COLOR}`
  }
}