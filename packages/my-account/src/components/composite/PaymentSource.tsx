import { PaymentSourceBrandName } from "@commercelayer/react-components/payment_source/PaymentSourceBrandName"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"
import { AsteriskSimple } from "phosphor-react"
import { Trans, useTranslation } from "react-i18next"

import { getTranslations } from "#utils/payments"

export function PaymentSourceName(): JSX.Element {
  const { t } = useTranslation()

  return (
    <PaymentSourceBrandName>
      {(props) => {
        return props?.brand ? (
          <div className="font-bold break-all">
            {getTranslations(props?.brand, t)}
          </div>
        ) : null
      }}
    </PaymentSourceBrandName>
  )
}

export function PaymentSourceCreditCardEndingIn(): JSX.Element {
  return (
    <div className="font-bold break-all">
      <Trans i18nKey="paymentSource.endingIn">
        <PaymentSourceDetail type="last4" />
      </Trans>
    </div>
  )
}

function PaymentSourceCreditCardAsterisks(): JSX.Element {
  return (
    <div className="flex items-center">
      <AsteriskSimple size={8} />
      <AsteriskSimple size={8} />
      <AsteriskSimple size={8} />
      <AsteriskSimple size={8} />
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
      <AsteriskSimple size={8} />
      <AsteriskSimple size={8} />
    </div>
  )
}

export function PaymentSourceCreditCardNumber(): JSX.Element {
  return (
    <div className="flex items-center gap-1 min-h-[20px] leading-[20px]">
      <PaymentSourceCreditCardAsterisksGroup />
      <span className="text-[15px] leading-[20px] font-bold text-black">
        <PaymentSourceDetail type="last4">
          {({ text }) => {
            return text === "****" ? (
              <PaymentSourceCreditCardAsterisks />
            ) : (
              <span>{text}</span>
            )
          }}
        </PaymentSourceDetail>
      </span>
    </div>
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
    <span className="antialiased text-[13px] leading-[20px] text-gray-400 mt-[4px]">{label}</span>
  ) : (
    <div className="font-light text-gray-500">{label}</div>
  )
}
