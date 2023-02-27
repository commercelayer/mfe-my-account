import { PaymentSourceBrandName } from "@commercelayer/react-components/payment_source/PaymentSourceBrandName"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"
import { Trans, useTranslation } from "react-i18next"

import {
  PaymentSourceTextPrimary,
  PaymentSourceTextSecondary,
  PaymentSourceNumberWrapper,
  PaymentSourceNumberPrimary,
  PaymentSourceNumberSecondary,
} from "./styled"

import { getTranslations } from "#utils/payments"

export function PaymentSourceName(): JSX.Element {
  const { t } = useTranslation()

  return (
    <PaymentSourceBrandName>
      {(props) => {
        return props?.brand ? (
          <PaymentSourceTextPrimary>
            {getTranslations(props?.brand, t)}
          </PaymentSourceTextPrimary>
        ) : null
      }}
    </PaymentSourceBrandName>
  )
}

export function PaymentSourceCreditCardEndingIn(): JSX.Element {
  return (
    <PaymentSourceTextPrimary>
      <Trans i18nKey="paymentSource.endingIn">
        <PaymentSourceDetail type="last4" />
      </Trans>
    </PaymentSourceTextPrimary>
  )
}

export function PaymentSourceCreditCardNumber(): JSX.Element {
  return (
    <PaymentSourceNumberWrapper>
      <Trans i18nKey="paymentSource.number" />
      <PaymentSourceNumberPrimary>
        <PaymentSourceDetail type="last4" />
      </PaymentSourceNumberPrimary>
    </PaymentSourceNumberWrapper>
  )
}

export function PaymentSourceCreditCardValidUntil(): JSX.Element {
  return (
    <PaymentSourceTextSecondary>
      <Trans i18nKey="paymentSource.validUntil">
        <PaymentSourceDetail type="exp_month" />
        <PaymentSourceDetail type="exp_year" />
      </Trans>
    </PaymentSourceTextSecondary>
  )
}

export function PaymentSourceCreditCardExpires(): JSX.Element {
  return (
    <PaymentSourceNumberSecondary>
      <Trans i18nKey="paymentSource.expires">
        <PaymentSourceDetail type="exp_month" />
        <PaymentSourceDetail type="exp_year" />
      </Trans>
    </PaymentSourceNumberSecondary>
  )
}
