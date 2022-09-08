import { Parcel } from "@commercelayer/sdk"

import useParcelTrackingDetailsParser from "components/hooks/useParcelTrackingDetailsParser"
import type {
  ParcelTrackingDetailsParsedTimeType,
  ParcelTrackingDetailsParsedDateType,
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

import { longDate, amPmTime } from "utils/dateTimeFormats"
import { rawDataParcelDetailsSchema } from "utils/types"

interface Props {
  parcel?: Parcel
}

type OrderShipmentHistoryDateProps = {
  dateKey: string
  dateIndex: number
  parsedData: ParcelTrackingDetailsParsedDateType
}

type OrderShipmentHistoryTimeProps = {
  time: ParcelTrackingDetailsParsedTimeType
  timeIndex: number
  dateIndex: number
}

const OrderShipmentHistoryTime: React.FC<OrderShipmentHistoryTimeProps> = ({
  time,
  timeIndex,
  dateIndex,
}) => {
  const dateTimeIsLast = dateIndex === 0 && timeIndex === 0
  const timeIsFirstOfDate = timeIndex === 0
  const timeFormatted = amPmTime(time.datetime as string)
  return (
    <ShipmentTime timeIsFirstOfDate={timeIsFirstOfDate} key={timeIndex}>
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
        <ShipmentTimeStatusWrapper>{time.status}</ShipmentTimeStatusWrapper>
        <ShipmentTimeMessageWrapper>{time.message}</ShipmentTimeMessageWrapper>
        <ShipmentTimeLocationWrapper>
          {time.trackingLocation}
        </ShipmentTimeLocationWrapper>
      </ShipmentTimeContentWrapper>
    </ShipmentTime>
  )
}

const OrderShipmentHistoryDate: React.FC<OrderShipmentHistoryDateProps> = ({
  dateKey,
  dateIndex,
  parsedData,
}) => {
  const date = parsedData[dateKey]
  const dateFormatted = longDate(date[0].datetime as string)

  return (
    <ShipmentDate key={dateIndex}>
      <ShipmentDateChip>{dateFormatted}</ShipmentDateChip>
      {date.map(
        (time: ParcelTrackingDetailsParsedTimeType, timeIndex: number) => {
          return (
            <OrderShipmentHistoryTime
              dateIndex={dateIndex}
              timeIndex={timeIndex}
              time={time}
              key={timeIndex}
            />
          )
        }
      )}
    </ShipmentDate>
  )
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
        (dateKey: string, dateIndex: number) => (
          <OrderShipmentHistoryDate
            dateKey={dateKey}
            dateIndex={dateIndex}
            parsedData={orderShipmentHistoryParsed}
            key={dateIndex}
          />
        )
      )}
    </ShipmentDates>
  )
}

export default OrderShipmentHistory
