import { format } from "date-fns"

export const dbDate = "yy-MM-dd"

export const shortDate = "dd/MM/yy"

export const longDate = "MMM dd, yyyy"

export const amPmTime = "hh:mm aa"

export const formatDate = (date: string, pattern: string) => {
  return format(new Date(date), pattern)
}
