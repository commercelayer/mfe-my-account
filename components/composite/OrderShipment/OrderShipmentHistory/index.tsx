import useOrderShipmentHistoryParser from "components/hooks/useOrderShipmentHistoryParser"
import ShipmentHistoryStep from "components/ui/icons/ShipmentHistoryStep"
import ShipmentHistoryStepLast from "components/ui/icons/ShipmentHistoryStepLast"

import {
  ShipmentDates,
  ShipmentDate,
  ShipmentDateChip,
  ShipmentTime,
  ShipmentTimeLabel,
  ShipmentTimeBorder,
  ShipmentTimeIconWrapper,
  ShipmentTimeIconBg,
  ShipmentTimeContentWrapper,
  ShipmentTimeStatusWrapper,
  ShipmentTimeMessageWrapper,
  ShipmentTimeLocationWrapper,
} from "./styled"

import testOrderShipmentHistoryData from "public/static/testData/orderShipmentHistory.json"

const OrderShipmentHistory: React.FC = () => {
  const orderShipmentHistoryParsed = useOrderShipmentHistoryParser(
    testOrderShipmentHistoryData
  )
  console.log(orderShipmentHistoryParsed)

  return (
    <ShipmentDates>
      {orderShipmentHistoryParsed.map((date, dateIndex) => {
        return (
          <ShipmentDate key={dateIndex}>
            <ShipmentDateChip>{date.dateFormatted}</ShipmentDateChip>
            {date.times.map((time, timeIndex) => {
              const dateTimeIsLast = dateIndex === 0 && timeIndex === 0
              const icon = dateTimeIsLast ? (
                <ShipmentHistoryStepLast />
              ) : (
                <ShipmentHistoryStep />
              )
              const timeIsFirstOfDate = timeIndex === 0
              return (
                <ShipmentTime
                  timeIsFirstOfDate={timeIsFirstOfDate}
                  key={timeIndex}
                >
                  <ShipmentTimeLabel>{time.timeFormatted}</ShipmentTimeLabel>
                  <ShipmentTimeBorder dateTimeIsLast={dateTimeIsLast}>
                    <ShipmentTimeIconWrapper>
                      {icon}
                      <ShipmentTimeIconBg />
                    </ShipmentTimeIconWrapper>
                  </ShipmentTimeBorder>
                  <ShipmentTimeContentWrapper>
                    <ShipmentTimeStatusWrapper>
                      {time.status}
                    </ShipmentTimeStatusWrapper>
                    <ShipmentTimeMessageWrapper>
                      {time.message}
                    </ShipmentTimeMessageWrapper>
                    <ShipmentTimeLocationWrapper>
                      {time.trackingLocation}
                    </ShipmentTimeLocationWrapper>
                  </ShipmentTimeContentWrapper>
                </ShipmentTime>
              )
            })}
          </ShipmentDate>
        )
      })}
    </ShipmentDates>
  )
}

export default OrderShipmentHistory
