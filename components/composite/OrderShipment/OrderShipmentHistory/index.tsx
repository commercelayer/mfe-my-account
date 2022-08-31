import { Parcel } from "@commercelayer/sdk"
import { format } from "date-fns"

import useParcelTrackingDetailsParser from "components/hooks/useParcelTrackingDetailsParser"
import type { ParcelTrackingDetailsParsedTimeType } from "components/hooks/useParcelTrackingDetailsParser"
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
      {Object.keys(orderShipmentHistoryParsed).map(
        (dateKey: string, dateIndex: number) => {
          const date = orderShipmentHistoryParsed[dateKey]
          const dateFormatted = format(
            new Date(date[0].datetime),
            "MMM dd, yyyy"
          )
          return (
            <ShipmentDate key={dateIndex}>
              <ShipmentDateChip>{dateFormatted}</ShipmentDateChip>
              {date.map(
                (
                  time: ParcelTrackingDetailsParsedTimeType,
                  timeIndex: number
                ) => {
                  const dateTimeIsLast = dateIndex === 0 && timeIndex === 0
                  const timeIsFirstOfDate = timeIndex === 0
                  const timeFormatted = format(
                    new Date(time.datetime),
                    "hh:mm aa"
                  )
                  return (
                    <ShipmentTime
                      timeIsFirstOfDate={timeIsFirstOfDate}
                      key={timeIndex}
                    >
                      <ShipmentTimeLabel>{timeFormatted}</ShipmentTimeLabel>
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
