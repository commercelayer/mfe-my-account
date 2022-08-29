import { format } from "date-fns"

export type orderShipmentHistoryData = {
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

export type orderShipmentHistoryParsedData = {
  dateIndex: string
  dateFormatted: string
  times: [
    {
      timeFormatted: string
      status: string
      message: string
      trackingLocation: string
    }
  ]
}

export default function useOrderShipmentHistoryParser(
  orderShipmentHistoryData: any[]
) {
  const orderShipmentHistoryParsedData: orderShipmentHistoryParsedData[] = []
  const orderShipmentHistoryDataReversed = orderShipmentHistoryData.reverse()

  orderShipmentHistoryDataReversed.map((dataEntry: any) => {
    const entryDateKey = format(new Date(dataEntry.datetime), "yy-MM-dd")
    const parsedDataIndex = orderShipmentHistoryParsedData.findIndex(
      (parsedDataEntry) => parsedDataEntry.dateIndex === entryDateKey
    )

    const parsedDataNewTimeObj = {
      timeFormatted: format(new Date(dataEntry.datetime), "hh:mm aa"),
      status: dataEntry.status,
      message: dataEntry.message,
      trackingLocation:
        dataEntry.tracking_location.city !== null
          ? `${dataEntry.tracking_location.city}, ${dataEntry.tracking_location.country}`
          : "",
    }

    if (parsedDataIndex > -1) {
      const parsedDataEntryTimes =
        orderShipmentHistoryParsedData[parsedDataIndex].times
      parsedDataEntryTimes.push(parsedDataNewTimeObj)
    } else {
      const entryDateFormatted = format(
        new Date(dataEntry.datetime),
        "MMM dd, yyyy"
      )
      orderShipmentHistoryParsedData.push({
        dateIndex: entryDateKey,
        dateFormatted: entryDateFormatted,
        times: [parsedDataNewTimeObj],
      })
    }
    return false
  })

  return orderShipmentHistoryParsedData
}
