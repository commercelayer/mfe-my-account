import {
  AdyenPayment,
  AxervePayment,
  BraintreePayment,
  CheckoutComPayment,
  Order,
  ExternalPayment,
  KlarnaPayment,
  PaypalPayment,
  SatispayPayment,
  StripePayment,
  WireTransfer,
} from "@commercelayer/sdk"

interface Card {
  type: string
  brand: string
  last4: string
  exp_year: number
  exp_month: number
}

interface PaymentSourceObject {
  adyen_payments: AdyenPayment & {
    payment_request_data?: {
      payment_method?: Card
    }
    payment_response?: {
      resultCode?: "Authorised"
    }
  }
  braintree_payments: BraintreePayment & {
    options?: {
      card: Card
    }
  }
  external_payments: ExternalPayment & {
    payment_source_token?: string
  }
  paypal_payments: PaypalPayment
  stripe_payments: StripePayment & {
    options?: {
      card: Card
    }
    payment_method?: {
      card: Card
      type: string | "klarna" | "card"
    }
  }
  wire_transfers: WireTransfer
  checkout_com_payments: CheckoutComPayment & {
    payment_response: {
      source?: Pick<Card, "last4"> & {
        scheme: string
        expiry_year: number
        expiry_month: number
      }
    }
  }
  klarna_payments: KlarnaPayment
  axerve_payments: AxervePayment
  satispay_payments: SatispayPayment
  credit_cards: any
}

interface Args {
  paymentType: keyof PaymentSourceObject
  paymentSource: Order["payment_source"]
}

interface CardDetails {
  brand: string
  last4: string
  exp_month: number | string
  exp_year: number | string
  issuer_type?: string
}

export function getCardDetails({
  paymentType,
  paymentSource,
}: Args): CardDetails {
  const ps = paymentSource as PaymentSourceObject[typeof paymentType]
  if (ps?.payment_instrument != null) {
    return {
      brand: ps?.payment_instrument?.card_type,
      exp_month: ps?.payment_instrument?.card_expiry_month,
      exp_year: ps?.payment_instrument?.card_expiry_year,
      last4: ps?.payment_instrument?.card_last_digits,
      issuer_type: ps?.payment_instrument?.issuer_type,
    }
  }
  return {
    brand: "",
    exp_month: "**",
    exp_year: "**",
    last4: "****",
    issuer_type: "",
  }
}

export function getCardIconFromDetails(
  cardDetails: CardDetails
): string | undefined {
  let iconName = cardDetails.brand ?? cardDetails.issuer_type
  if (iconName === "wire_transfer") {
    iconName = "wire-transfer"
  }
  if (iconName.length === 0 || iconName === "card") {
    iconName = "credit-card"
  }
  return `//data.commercelayer.app/assets/images/icons/credit-cards/color/${iconName}.svg`
}
