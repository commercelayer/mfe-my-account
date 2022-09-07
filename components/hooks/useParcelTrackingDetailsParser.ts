import type { InputDateTime } from "utils/dateTimeFormats"
import { dbDate } from "utils/dateTimeFormats"
import type { RawDataParcelDetails } from "utils/types"

export type ParcelTrackingDetailsParsedTimeType = {
  datetime?: Date
  status?: string
  message?: string
  trackingLocation: string
}

export type ParcelTrackingDetailsParsedDateType = Record<
  string,
  ParcelTrackingDetailsParsedTimeType[]
>

const useParcelTrackingDetailsParser = (
  trackingDetails: RawDataParcelDetails
): ParcelTrackingDetailsParsedDateType => {
  const trackingDetailsReversed = trackingDetails.reverse()

  return trackingDetailsReversed.reduce<ParcelTrackingDetailsParsedDateType>(
    (acc, item) => {
      const dateIndex = dbDate(item.datetime as InputDateTime)
      const timeObj = {
        datetime: item.datetime as Date,
        status: item.status as string,
        message: item.message as string,
        trackingLocation:
          item.tracking_location.city !== null
            ? `${item.tracking_location.city}, ${item.tracking_location.country}`
            : "",
      }

      acc[dateIndex] ||= []
      acc[dateIndex].push(timeObj)

      return acc
    },
    {}
  )
}

export default useParcelTrackingDetailsParser
