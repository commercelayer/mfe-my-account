import { format } from "date-fns"

export const dbDate = "yy-MM-dd"

export const shortDate = "dd/MM/yy"

export const longDate = "MMM dd, yyyy"

export const amPmTime = "hh:mm aa"

/**
 * Calculate the formatted string of a starting datetime string in a requested datetime format pattern.
 *
 * @param date - The starting datetime string
 * @param pattern - The datetime format pattern
 *
 * @returns a string containing the formatted datetime string in the requested format using format method of date-fns package.
 */
export const formatDate = (date: string, pattern: string) => {
  return format(new Date(date), pattern)
}
