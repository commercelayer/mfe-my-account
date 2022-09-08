import { format } from "date-fns"

const formatDate = (date: string, pattern: string) => {
  return format(new Date(date), pattern)
}

export const dbDate = (date: string) => {
  return formatDate(date, "yy-MM-dd")
}

export const shortDate = (date: string) => {
  return formatDate(date, "dd/MM/yy")
}

export const longDate = (date: string) => {
  return formatDate(date, "MMM dd, yyyy")
}

export const amPmTime = (time: string) => {
  return formatDate(time, "hh:mm aa")
}
