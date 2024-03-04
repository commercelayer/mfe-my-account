import { OrderSubscription } from "@commercelayer/sdk"
import capitalize from "lodash/capitalize"
import { Trans } from "react-i18next"

import {
  PaymentSourceBrandNameWrapper,
  PaymentSourceWrapper,
} from "#components/ui/PaymentSource/Row/styled"
import {
  PaymentSourceBrandIconWrapper,
  PaymentSourceTextPrimary,
  PaymentSourceTextSecondary,
  PaymentSourceTextWrapper,
} from "#components/ui/PaymentSource/styled"
import { getCardDetails, getCardIconFromDetails } from "#utils/getCardDetails"

interface Props {
  orderSubscription?: OrderSubscription
}

function SubscriptionPayments({ orderSubscription }: Props): JSX.Element {
  if (
    orderSubscription != null &&
    orderSubscription.customer_payment_source != null &&
    orderSubscription.customer_payment_source.payment_method != null &&
    orderSubscription.customer_payment_source.payment_source != null
  ) {
    const paymentMethod =
      orderSubscription.customer_payment_source.payment_method
    const paymentSource =
      orderSubscription.customer_payment_source.payment_source

    const details = getCardDetails({
      paymentType: paymentMethod.payment_source_type,
      paymentSource,
    })
    const icon = getCardIconFromDetails(details)
    const name = capitalize(
      (details.brand ?? details.issuer_type).replace(/_|-/gm, " ")
    )
    return details.issuer_type != null ? (
      <PaymentSourceWrapper>
        <PaymentSourceBrandIconWrapper>
          <img src={icon} alt={paymentMethod?.name ?? ""} width={36} />
        </PaymentSourceBrandIconWrapper>
        <PaymentSourceBrandNameWrapper>
          {details.last4 != null ? (
            <div>
              <PaymentSourceTextWrapper>
                <PaymentSourceTextPrimary>{name}</PaymentSourceTextPrimary>
                <PaymentSourceTextPrimary>
                  <Trans i18nKey="paymentSource.endingIn">
                    {details.last4}
                  </Trans>
                </PaymentSourceTextPrimary>
              </PaymentSourceTextWrapper>
              <PaymentSourceTextSecondary>
                <div className="flex items-center gap-1">
                  <Trans i18nKey="paymentSource.expires" />
                  <div className="flex">
                    {details.exp_month}/{details.exp_year}
                  </div>
                </div>
              </PaymentSourceTextSecondary>
            </div>
          ) : (
            name
          )}
        </PaymentSourceBrandNameWrapper>
      </PaymentSourceWrapper>
    ) : (
      <PaymentSourceWrapper>{name}</PaymentSourceWrapper>
    )
  }
  return <>No valid customer payment source found in order subscription</>
}

export default SubscriptionPayments
