export function getTranslations(value: string, t: (a: string) => string) {
  switch (value) {
    case "Stripe Payment":
    case "Adyen Payment":
    case "Braintree Payment":
    case "Checkout Com Payment":
      return t("order.paymentMethod.creditCard")

    case "Paypal Payment":
      return "PayPal"

    case "Wire transfer":
    case "Wire Transfer":
      return t("order.paymentMethod.wireTransfer")

    default:
      return value || ""
  }
}
