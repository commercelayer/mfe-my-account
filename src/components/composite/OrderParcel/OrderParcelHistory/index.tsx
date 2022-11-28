import { ParcelField } from "@commercelayer/react-components"
import { Trans } from "react-i18next"

import ShipmentHistoryStep from "#components/ui/icons/ShipmentHistoryStep"
import ShipmentHistoryStepLast from "#components/ui/icons/ShipmentHistoryStepLast"

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

import type {
  ParcelTrackingDetailsParsedTimeType,
  ParcelTrackingDetailsParsedDateType,
} from "#hooks/useParcelTrackingDetailsParser"
import useParcelTrackingDetailsParser from "#hooks/useParcelTrackingDetailsParser"
import { rawDataParcelDetailsSchema } from "#types/parcelDetailsJson"
import { formatDate, longDate, amPmTime } from "#utils/dateTimeFormats"

interface OrderParcelHistoryDateProps {
  dateKey: string
  dateIndex: number
  parsedData: ParcelTrackingDetailsParsedDateType
}

interface OrderParcelHistoryTimeProps {
  time: ParcelTrackingDetailsParsedTimeType
  timeIndex: number
  dateIndex: number
}

type ParcelStatus =
  | "parcelStatus.delivered"
  | "parcelStatus.out_for_delivery"
  | "parcelStatus.in_transit"
  | "parcelStatus.pre_transit"

const OrderParcelHistoryTime: React.FC<OrderParcelHistoryTimeProps> = ({
  time,
  timeIndex,
  dateIndex,
}) => {
  const dateTimeIsLast = dateIndex === 0 && timeIndex === 0
  const timeIsFirstOfDate = timeIndex === 0
  const timeFormatted = time.datetime && formatDate(time.datetime, amPmTime)
  const parcelStatusTrans = `parcelStatus.${
    time.status as string
  }` as ParcelStatus
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
        <ShipmentTimeStatusWrapper>
          <Trans i18nKey={parcelStatusTrans} />
        </ShipmentTimeStatusWrapper>
        <ShipmentTimeMessageWrapper>{time.message}</ShipmentTimeMessageWrapper>
        <ShipmentTimeLocationWrapper>
          {time.trackingLocation}
        </ShipmentTimeLocationWrapper>
      </ShipmentTimeContentWrapper>
    </ShipmentTime>
  )
}

const OrderParcelHistoryDate: React.FC<OrderParcelHistoryDateProps> = ({
  dateKey,
  dateIndex,
  parsedData,
}) => {
  const date = parsedData[dateKey]
  const dateFormatted =
    date[0].datetime && formatDate(date[0].datetime, longDate)

  return (
    <ShipmentDate key={dateIndex}>
      <ShipmentDateChip>{dateFormatted}</ShipmentDateChip>
      {date.map(
        (time: ParcelTrackingDetailsParsedTimeType, timeIndex: number) => {
          return (
            <OrderParcelHistoryTime
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

const OrderParcelHistory: React.FC = () => {
  return (
    <ParcelField attribute="tracking_details" tagElement="span">
      {(props: any) => {
        if (
          props?.attributeValue === null ||
          rawDataParcelDetailsSchema.safeParse(props?.attributeValue)
            .success === false
        )
          return <span></span>

        const parsedDetails = rawDataParcelDetailsSchema.parse(
          props?.attributeValue
        )

        const OrderParcelHistoryParsed =
          useParcelTrackingDetailsParser(parsedDetails)

        return (
          <ShipmentDates>
            {Object.keys(OrderParcelHistoryParsed).map(
              (dateKey: string, dateIndex: number) => (
                <OrderParcelHistoryDate
                  dateKey={dateKey}
                  dateIndex={dateIndex}
                  parsedData={OrderParcelHistoryParsed}
                  key={dateIndex}
                />
              )
            )}
          </ShipmentDates>
        )
      }}
    </ParcelField>
  )
}

export default OrderParcelHistory
