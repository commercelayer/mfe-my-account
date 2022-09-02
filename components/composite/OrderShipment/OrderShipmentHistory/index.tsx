import { Parcel } from "@commercelayer/sdk"

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

import type { InputDateTime } from "utils/dateTimeFormats"
import { longDate, amPmTime } from "utils/dateTimeFormats"
import { rawDataParcelDetailsSchema } from "utils/types"

interface Props {
  parcel?: Parcel
}

const OrderShipmentHistory: React.FC<Props> = ({ parcel }) => {
  if (!parcel || parcel?.tracking_details === null) return null

  if (
    rawDataParcelDetailsSchema.safeParse(parcel?.tracking_details).success ===
    false
  )
    return null

  const parsedDetails = rawDataParcelDetailsSchema.parse(
    parcel?.tracking_details
  )

  const orderShipmentHistoryParsed =
    useParcelTrackingDetailsParser(parsedDetails)

  return (
    <ShipmentDates>
      {Object.keys(orderShipmentHistoryParsed).map(
        (dateKey: string, dateIndex: number) => {
          const date = orderShipmentHistoryParsed[dateKey]
          const dateFormatted = longDate(date[0].datetime as InputDateTime)
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
                  const timeFormatted = amPmTime(time.datetime as InputDateTime)
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
