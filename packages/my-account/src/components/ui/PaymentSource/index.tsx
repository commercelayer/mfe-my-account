import { PaymentSourceBrandName } from "@commercelayer/react-components/payment_source/PaymentSourceBrandName"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"
import { AsteriskSimple } from "phosphor-react"
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

function PaymentSourceCreditCardAsterisks(): JSX.Element {
  return (
    <div className="flex items-center">
      <AsteriskSimple weight="bold" size={10} />
      <AsteriskSimple weight="bold" size={10} />
      <AsteriskSimple weight="bold" size={10} />
      <AsteriskSimple weight="bold" size={10} />
    </div>
  )
}

function PaymentSourceCreditCardAsterisksGroup(): JSX.Element {
  return (
    <div className="flex items-center py-1 gap-1">
      <PaymentSourceCreditCardAsterisks />
      <PaymentSourceCreditCardAsterisks />
      <PaymentSourceCreditCardAsterisks />
    </div>
  )
}

function PaymentSourceCreditCardExpiresAsterisks(): JSX.Element {
  return (
    <div className="flex items-center">
      <AsteriskSimple weight="bold" size={8} />
      <AsteriskSimple weight="bold" size={8} />
    </div>
  )
}

export function PaymentSourceCreditCardNumber(): JSX.Element {
  return (
    <PaymentSourceNumberWrapper>
      <PaymentSourceCreditCardAsterisksGroup />
      <PaymentSourceNumberPrimary>
        <PaymentSourceDetail type="last4">
          {({ text }) => {
            return text === "****" ? (
              <PaymentSourceCreditCardAsterisks />
            ) : (
              <span>{text}</span>
            )
          }}
        </PaymentSourceDetail>
      </PaymentSourceNumberPrimary>
    </PaymentSourceNumberWrapper>
  )
}
interface PaymentSourceCreditCardExpiresProps {
  variant: "row" | "card"
}

export function PaymentSourceCreditCardExpires({
  variant,
}: PaymentSourceCreditCardExpiresProps): JSX.Element {
  const expiry_month = (
    <PaymentSourceDetail type="exp_month">
      {({ text }) =>
        text === "**" ? (
          <PaymentSourceCreditCardExpiresAsterisks />
        ) : (
          <span>{text}</span>
        )
      }
    </PaymentSourceDetail>
  )

  const exp_year = (
    <PaymentSourceDetail type="exp_year">
      {({ text }) =>
        text === "**" ? (
          <PaymentSourceCreditCardExpiresAsterisks />
        ) : (
          <span>{text.toString().slice(-2)}</span>
        )
      }
    </PaymentSourceDetail>
  )

  const label = (
    <div className="flex items-center gap-1">
      <Trans i18nKey="paymentSource.expires" />
      <div className="flex">
        {expiry_month}/{exp_year}
      </div>
    </div>
  )

  return variant === "card" ? (
    <PaymentSourceNumberSecondary>{label}</PaymentSourceNumberSecondary>
  ) : (
    <PaymentSourceTextSecondary>{label}</PaymentSourceTextSecondary>
  )
}
