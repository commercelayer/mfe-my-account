import { format } from "date-fns"

export type ParcelTrackingDetailsType = {
  object: string
  source: string
  status: string
  message: string
  datetime: string
  description: string
  carrier_code: string
  status_detail: string
  tracking_location: {
    zip: string
    city: string
    state: string
    object: string
    country: string
  }
}

export type ParcelTrackingDetailsParsedTimeType = {
  datetime: string
  status: string
  message: string
  trackingLocation: string
}

export type ParcelTrackingDetailsParsedDateType = {
  [key: string]: ParcelTrackingDetailsParsedTimeType[]
}

export default function useParcelTrackingDetailsParser(trackingDetails: any[]) {
  const trackingDetailsReversed = trackingDetails.reverse()

  const trackingDetailsParsed = trackingDetailsReversed.reduce(
    (items, item) => {
      const dateIndex = format(new Date(item.datetime), "yy-MM-dd")
      const timeObj = {
        datetime: item.datetime,
        status: item.status,
        message: item.message,
        trackingLocation:
          item.tracking_location.city !== null
            ? `${item.tracking_location.city}, ${item.tracking_location.country}`
            : "",
      }
      items[dateIndex] !== undefined
        ? items[dateIndex].push(timeObj)
        : (items[dateIndex] = [timeObj])

      return items
    },
    []
  )

  return trackingDetailsParsed
}
