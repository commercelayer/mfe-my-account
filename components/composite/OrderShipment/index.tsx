import { Settings } from "HostedApp"
import Link from "next/link"
import { CaretLeft } from "phosphor-react"

import StepCompletedIcon from "components/ui/icons/StepCompletedIcon"
import StepCurrentIcon from "components/ui/icons/StepCurrentIcon"
import ShipmentStatusChip from "components/ui/StatusChip/ShipmentStatusChip"

import {
  ShipmentContainer,
  ShipmentHeader,
  ShipmentHeaderTop,
  BackToOrder,
  Title,
  ShipmentHeaderMain,
  ShipmentHeaderCol,
  ShipmentHeaderLabel,
  ShipmentHeaderValue,
  ShipmentRows,
  ShipmentRow,
  ShipmentDateChip,
} from "./styled"

interface Props {
  settings: Settings
  orderId: string
  shipmentId: string
}

const OrderShipment: React.FC<Props> = ({ settings, orderId, shipmentId }) => {
  return (
    <ShipmentContainer>
      <ShipmentHeader>
        <ShipmentHeaderTop>
          <Link href={`/orders/${orderId}?accessToken=${settings.accessToken}`}>
            <BackToOrder>
              <CaretLeft weight="regular" className="w-7 h-7" />
            </BackToOrder>
          </Link>
          <Title>Track Shipment</Title>
        </ShipmentHeaderTop>
        <ShipmentHeaderMain className="mt-10">
          <ShipmentHeaderCol>
            <ShipmentHeaderLabel>Tracking Code</ShipmentHeaderLabel>
            <ShipmentHeaderValue>12d34fgv3456321</ShipmentHeaderValue>
          </ShipmentHeaderCol>
          <ShipmentHeaderCol className="w-28">
            <ShipmentHeaderLabel>Courier</ShipmentHeaderLabel>
            <ShipmentHeaderValue>UPS</ShipmentHeaderValue>
          </ShipmentHeaderCol>
        </ShipmentHeaderMain>
        <ShipmentHeaderMain className="mt-3">
          <ShipmentStatusChip status="upcoming" />
        </ShipmentHeaderMain>
      </ShipmentHeader>
      <ShipmentRows>
        <ShipmentRow>
          <ShipmentDateChip>Jun 28, 2021</ShipmentDateChip>
          <div className="relative flex items-start pb-4 mt-5 ml-5 text-left">
            <div className="w-28">
              <div className="mt-1 font-bold text-xxs">02:11 PM</div>
            </div>
            <div className="absolute z-10 h-full border-r border-gray-200 border-dashed left-20 top-2">
              <div className="absolute -ml-3 -top-2">
                <StepCurrentIcon />
                <div className="block h-2 bg-gray-50 md:bg-white"></div>
              </div>
            </div>
            <div>
              <div className="font-bold">In transit</div>
              <div className="text-sm text-gray-400">
                Departed from facility
              </div>
              <div className="text-sm font-bold">Nurnberg, DE</div>
            </div>
          </div>
          <div className="relative flex items-start pb-4 mt-5 ml-5 text-left">
            <div className="w-28">
              <div className="mt-1 font-bold text-xxs">02:11 PM</div>
            </div>
            <div className="absolute z-10 h-full border-r border-gray-200 left-20 top-2">
              <div className="absolute -ml-3 -top-2">
                <StepCompletedIcon />
                <div className="block h-2 bg-gray-50 md:bg-white"></div>
              </div>
            </div>
            <div>
              <div className="font-bold">In transit</div>
              <div className="text-sm text-gray-400">
                Departed from facility
              </div>
              <div className="text-sm font-bold">Nurnberg, DE</div>
            </div>
          </div>
        </ShipmentRow>
      </ShipmentRows>
    </ShipmentContainer>
  )
}

export default OrderShipment
