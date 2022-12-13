import type { RawDataParcelDetails } from "#types/parcelDetailsJson"
import { formatDate, dbDate } from "#utils/dateTimeFormats"

export type ParcelTrackingDetailsParsedTimeType = {
  datetime?: string
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
      if (item.datetime) {
        const dateIndex = formatDate(item.datetime, dbDate)
        const timeObj = {
          datetime: item.datetime,
          status: item.status as string,
          message: item.message as string,
          trackingLocation:
            item.tracking_location.city !== null
              ? `${item.tracking_location.city}, ${item.tracking_location.country}`
              : "",
        }

        acc[dateIndex] ||= []
        acc[dateIndex].push(timeObj)
      }
      return acc
    },
    {}
  )
}

export default useParcelTrackingDetailsParser
