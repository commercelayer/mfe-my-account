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
  timeFormatted: string
  status: string
  message: string
  trackingLocation: string
}

export type ParcelTrackingDetailsParsedDateType = {
  dateIndex: string
  dateFormatted: string
  times: ParcelTrackingDetailsParsedTimeType[]
}

export default function useParcelTrackingDetailsParser(historyData: any[]) {
  const historyDataReversed = historyData.reverse()

  const historyParsedData = historyDataReversed.reduce((items, item) => {
    const dateIndex = format(new Date(item.datetime), "yy-MM-dd")
    const newTimeObj = {
      timeFormatted: format(new Date(item.datetime), "hh:mm aa"),
      status: item.status,
      message: item.message,
      trackingLocation:
        item.tracking_location.city !== null
          ? `${item.tracking_location.city}, ${item.tracking_location.country}`
          : "",
    }
    const dateFormatted = format(new Date(item.datetime), "MMM dd, yyyy")
    const newDateObj = {
      dateIndex,
      dateFormatted,
      times: [newTimeObj],
    }

    const searchDateIndex = items.findIndex(
      (item: ParcelTrackingDetailsParsedDateType) =>
        item.dateIndex === dateIndex
    )
    if (searchDateIndex > -1) {
      items[searchDateIndex].times.push(newTimeObj)
    } else {
      items.push(newDateObj)
    }
    return items
  }, [])

  return historyParsedData
}
