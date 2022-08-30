import { Parcel } from "@commercelayer/sdk"

import useParcelTrackingDetailsParser from "components/hooks/useParcelTrackingDetailsParser"
import type {
  ParcelTrackingDetailsParsedDateType,
  ParcelTrackingDetailsParsedTimeType,
} from "components/hooks/useParcelTrackingDetailsParser"
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

interface Props {
  parcel?: Parcel
}

const OrderShipmentHistory: React.FC<Props> = ({ parcel }) => {
  if (!parcel || parcel?.tracking_details === null) return null

  const orderShipmentHistoryParsed = useParcelTrackingDetailsParser(
    parcel?.tracking_details as any
  )

  return (
    <ShipmentDates>
      {orderShipmentHistoryParsed.map(
        (date: ParcelTrackingDetailsParsedDateType, dateIndex: number) => {
          return (
            <ShipmentDate key={dateIndex}>
              <ShipmentDateChip>{date.dateFormatted}</ShipmentDateChip>
              {date.times.map(
                (
                  time: ParcelTrackingDetailsParsedTimeType,
                  timeIndex: number
                ) => {
                  const dateTimeIsLast = dateIndex === 0 && timeIndex === 0
                  const timeIsFirstOfDate = timeIndex === 0
                  return (
                    <ShipmentTime
                      timeIsFirstOfDate={timeIsFirstOfDate}
                      key={timeIndex}
                    >
                      <ShipmentTimeLabel>
                        {time.timeFormatted}
                      </ShipmentTimeLabel>
                      <ShipmentTimeBorder dateTimeIsLast={dateTimeIsLast}>
                        <ShipmentTimeIconWrapper>
                          {dateTimeIsLast ? (
                            <ShipmentHistoryStepLast />
                          ) : (
                            <ShipmentHistoryStep />
                          )}
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
                }
              )}
            </ShipmentDate>
          )
        }
      )}
    </ShipmentDates>
  )
}

export default OrderShipmentHistory
