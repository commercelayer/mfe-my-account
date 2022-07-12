import { useContext } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import styled from "styled-components"
import tw from "twin.macro"
import CaretLeftIcon from "components/ui/icons/CaretLeftIcon"

import { AppContext } from "components/data/AppProvider"
import ShipmentStatusChip from "components/composite/Order/ShipmentStatusChip"
import StepCompletedIcon from "components/ui/icons/StepCompletedIcon"
import StepCurrentIcon from "components/ui/icons/StepCurrentIcon"

const Shipment: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const orderId = query.orderId as string
  const shipmentId = query.shipmentId as string

  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  return (
    <ShipmentContainer>
      <ShipmentHeader>
        <ShipmentHeaderTop>
          <BackToOrder onClick={() => router.push(`/orders/${orderId}?accessToken=${accessToken}`)}>
            <CaretLeftIcon />
          </BackToOrder>
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
          <div className="relative ml-5 mt-5 text-left flex items-start pb-4">
            <div className="w-28">
              <div className="text-xxs font-bold mt-1">02:11 PM</div>       
            </div>
            <div className="border-r border-gray-200 border-dashed absolute h-full left-20 top-2 z-10">
              <div className="-top-2 -ml-3 absolute">
                <StepCurrentIcon />
                <div className="block h-2 bg-gray-50 md:bg-white"></div>
              </div>
            </div>
            <div>
              <div className="font-bold">In transit</div>
              <div className="text-sm text-gray-400">Departed from facility</div>
              <div className="text-sm font-bold">Nurnberg, DE</div>
            </div>
          </div>
          <div className="relative ml-5 mt-5 text-left flex items-start pb-4">
            <div className="w-28">
              <div className="text-xxs font-bold mt-1">02:11 PM</div>       
            </div>
            <div className="border-r border-gray-200 absolute h-full left-20 top-2 z-10">
              <div className="-top-2 -ml-3 absolute">
                <StepCompletedIcon />
                <div className="block h-2 bg-gray-50 md:bg-white"></div>
              </div>
            </div>
            <div>
              <div className="font-bold">In transit</div>
              <div className="text-sm text-gray-400">Departed from facility</div>
              <div className="text-sm font-bold">Nurnberg, DE</div>
            </div>
          </div>
        </ShipmentRow>
      </ShipmentRows>
    </ShipmentContainer>
  )
}

export default Shipment

const ShipmentContainer = styled.div`
  ${tw``}
`

const ShipmentHeader = styled.div`
  ${tw`mt-3`}
`

const ShipmentHeaderTop = styled.div`
  ${tw`flex items-start content-start`}
`

const BackToOrder = styled.div`
  ${tw`flex-none rounded-full border border-gray-300 p-1 hover:bg-gray-300 cursor-pointer `}
`

const Title = styled.h2`
  ${tw`ml-4 p-1 text-lg font-medium`}
`

const ShipmentHeaderMain = styled.div`
  ${tw`md:pl-12 flex flex-auto justify-between`}
`

const ShipmentHeaderCol = styled.div`
  ${tw``}
`

const ShipmentHeaderLabel = styled.label`
  ${tw`block uppercase text-xs text-gray-300 font-bold`}
`

const ShipmentHeaderValue = styled.span`
  ${tw`block text-sm font-bold`}
`

const ShipmentRows = styled.div`
  ${tw`mt-10 -mx-5 px-5 pb-10 pt-10`}
`

const ShipmentRow = styled.div`
  ${tw``}
`

const ShipmentDateChip = styled.div`
  ${tw`inline text-sm text-center text-gray-600 bg-gray-300 capitalize text-3xs w-auto uppercase font-bold py-[2px] px-[12px] leading-snug rounded-xl align-middle`}
`