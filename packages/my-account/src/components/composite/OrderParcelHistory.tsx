import { ParcelField } from "@commercelayer/react-components/parcels/ParcelField"
import cn from "classnames"
import { Trans } from "react-i18next"

import ShipmentHistoryStep from "#components/ui/icons/ShipmentHistoryStep"
import ShipmentHistoryStepLast from "#components/ui/icons/ShipmentHistoryStepLast"
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

function OrderParcelHistoryTime({
  time,
  timeIndex,
  dateIndex,
}: OrderParcelHistoryTimeProps): JSX.Element {
  const dateTimeIsLast = dateIndex === 0 && timeIndex === 0
  const timeIsFirstOfDate = timeIndex === 0
  const timeFormatted = time.datetime && formatDate(time.datetime, amPmTime)
  const parcelStatusTrans = `parcelStatus.${
    time.status as string
  }` as ParcelStatus
  return (
    <div className={cn(
      'relative flex items-start pb-4 mt-4 ml-5 text-left', 
      { 'mt-8': timeIsFirstOfDate }
    )} key={timeIndex}>
      <div className="mt-1 font-bold w-28 text-xxs">
        {timeFormatted}
      </div>
      <ShipmentTimeBorder dateTimeIsLast={dateTimeIsLast}>
        <div className="absolute -ml-3 bg-gray-50 md:bg-white -top-2 pb-2">
          {dateTimeIsLast ? (
            <ShipmentHistoryStepLast />
          ) : (
            <ShipmentHistoryStep />
          )}
          <div className="absolute -ml-3 -top-2" />
        </div>
      </ShipmentTimeBorder>
      <div className="relative block">
        <div className="font-bold">
          <Trans i18nKey={parcelStatusTrans} />
        </div>
        <div className="w-40 text-sm text-gray-400 md:w-auto">
          {time.message}
        </div>
        <div className="text-sm font-bold">
          {time.trackingLocation}
        </div>
      </div>
    </div>
  )
}

interface ShipmentTimeBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  dateTimeIsLast: boolean
}

function ShipmentTimeBorder({ children, dateTimeIsLast }: ShipmentTimeBorderProps) {
  return <div className={cn('absolute z-10 h-full border-r border-gray-300 left-20 top-2', {
    'border-dashed': dateTimeIsLast,
    'before:border-[#e6e7e7] before:border-t-0 before:border-r-0 before:border-b-[1px] before:border-l-[1px] before:content-[""] before:h-[8px] before:w-[8px] before:absolute before:top-[25px] before:left-[-3.5px] before:rotate-135': dateTimeIsLast,
  })}>{children}</div>
}

function OrderParcelHistoryDate({
  dateKey,
  dateIndex,
  parsedData,
}: OrderParcelHistoryDateProps): JSX.Element {
  const date = parsedData[dateKey]
  const dateFormatted =
    date[0].datetime && formatDate(date[0].datetime, longDate)

  return (
    <div className="mt-8" key={dateIndex}>
      <div className="inline text-sm text-center text-gray-600 bg-gray-300 text-3xs w-auto uppercase font-bold py-[2px] px-[12px] leading-snug rounded-xl align-middle">
        {dateFormatted}
      </div>
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
    </div>
  )
}

function OrderParcelHistory(): JSX.Element {
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
          <div className="mt-12 -mx-5 px-5 pb-10">
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
          </div>
        )
      }}
    </ParcelField>
  )
}

export default OrderParcelHistory
