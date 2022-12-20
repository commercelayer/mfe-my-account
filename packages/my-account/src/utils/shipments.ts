/**
 * Retrieves the correct translation of a shipment status depending on statuses regroupments defined internally.
 *
 * @param value - The shipment status
 * @param t - Instance of React i18next useTranslation hook
 *
 * @returns a string containing the calculated translation of shipment status, if set, or the
 * starting value to search a translation for if no corresponding translation is available.
 */
export function getStatusTranslations(value: string, t: (a: string) => string) {
  switch (value) {
    case "on_hold":
    case "upcoming":
    case "draft":
      return t("shipmentStatus.upcoming")
    case "picking":
    case "packing":
    case "ready_to_ship":
      return t("shipmentStatus.in_progress")
    case "cancelled":
      return t("shipmentStatus.cancelled")
    case "shipped":
      return t("shipmentStatus.shipped")
    default:
      return value || ""
  }
}
