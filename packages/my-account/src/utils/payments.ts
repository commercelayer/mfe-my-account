/**
 * Retrieves the correct translation of a payment method depending on payment source brand name provided.
 *
 * @param value - The payment source brand name
 * @param t - Instance of React i18next useTranslation hook
 *
 * @returns a string containing the calculated translation of payment method, if set, or the
 * starting value to search a translation for if no corresponding translation is available.
 */
export function getTranslations(value: string, t: (a: string) => string) {
  switch (value) {
    case "Stripe Payment":
    case "Adyen Payment":
    case "Braintree Payment":
    case "Checkout Com Payment":
      return t("paymentSource.creditCard")

    case "Paypal Payment":
      return "PayPal"

    case "Wire transfer":
    case "Wire Transfer":
      return t("paymentSource.wireTransfer")

    default:
      return value || ""
  }
}
