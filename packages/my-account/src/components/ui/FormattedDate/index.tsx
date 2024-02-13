
import { formatDate, shortDate } from "#utils/dateTimeFormats"

interface Props {
  date?: string | null
}

function FormattedDate({ date }: Props): string | null {
  if (date == null) return null
  const formattedDate =
    (date != null && formatDate(date, shortDate)) || ""

  return formattedDate
}

export default FormattedDate
