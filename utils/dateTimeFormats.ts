import { format } from "date-fns"

export type InputDateTime = string | number | Date

export const dbDate = (date: InputDateTime) => {
  return format(new Date(date), "yy-MM-dd")
}

export const shortDate = (date: InputDateTime) => {
  return format(new Date(date), "dd/MM/yy")
}

export const longDate = (date: InputDateTime) => {
  return format(new Date(date), "MMM dd, yyyy")
}

export const amPmTime = (time: InputDateTime) => {
  return format(new Date(time), "hh:mm aa")
}
