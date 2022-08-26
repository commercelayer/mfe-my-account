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
  date: string
  times: [
    {
      time: string
      status: string
      message: string
      tracking_location: string
    }
  ]
}

export default function useOrderShipmentHistoryParser(
  orderShipmentHistoryData: any[]
) {
  const orderShipmentHistoryParsedData: orderShipmentHistoryParsedData[] = []
  orderShipmentHistoryData.reverse()

  orderShipmentHistoryData.map((dataEntry: any) => {
    const entryDateKey = format(new Date(dataEntry.datetime), "yy-MM-dd")
    const parsedDataIndex = orderShipmentHistoryParsedData.findIndex(
      (parsedDataEntry) => parsedDataEntry.date === entryDateKey
    )

    const parsedDataNewTimeObj = {
      time: format(new Date(dataEntry.datetime), "hh:mm aa"),
      status: dataEntry.status,
      message: dataEntry.message,
      tracking_location:
        dataEntry.tracking_location.city !== null
          ? `${dataEntry.tracking_location.city}, ${dataEntry.tracking_location.country}`
          : "",
    }

    if (parsedDataIndex > -1) {
      const parsedDataEntryTimes =
        orderShipmentHistoryParsedData[parsedDataIndex].times
      parsedDataEntryTimes.push(parsedDataNewTimeObj)
    } else {
      orderShipmentHistoryParsedData.push({
        date: entryDateKey,
        times: [parsedDataNewTimeObj],
      })
    }
    return false
  })

  return orderShipmentHistoryParsedData
}
