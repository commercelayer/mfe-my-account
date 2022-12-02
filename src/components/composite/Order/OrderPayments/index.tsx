import { PaymentMethodsContainer } from "@commercelayer/react-components/payment_methods/PaymentMethodsContainer"
import { PaymentSource } from "@commercelayer/react-components/payment_source/PaymentSource"
import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceBrandName } from "@commercelayer/react-components/payment_source/PaymentSourceBrandName"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"
import { Trans, useTranslation } from "react-i18next"

import {
  PaymentSourceWrapper,
  PaymentSourceBrandNameWrapper,
  PaymentSourceBrandNamePrimary,
  PaymentSourceBrandNameSecondary,
} from "./styled"

import { getTranslations } from "#utils/payments"

const OrderPaymentSourceBrandName: React.FC = () => {
  const { t } = useTranslation()

  return (
    <PaymentSourceBrandName>
      {(props) => (
        <PaymentSourceBrandNamePrimary>
          {getTranslations(props?.brand, t)}
        </PaymentSourceBrandNamePrimary>
      )}
    </PaymentSourceBrandName>
  )
}

const OrderPayments: React.FC = () => {
  return (
    <PaymentMethodsContainer>
      <PaymentSource readonly>
        <PaymentSourceWrapper>
          <PaymentSourceBrandIcon />
          <PaymentSourceBrandNameWrapper>
            <PaymentSourceDetail type="last4">
              {(props) => {
                if (props.text === null || props.text.length === 0)
                  return (
                    <PaymentSourceBrandNamePrimary>
                      <OrderPaymentSourceBrandName />
                    </PaymentSourceBrandNamePrimary>
                  )
                return (
                  <>
                    <PaymentSourceBrandNamePrimary>
                      <OrderPaymentSourceBrandName />
                      <Trans i18nKey="order.payments.paymentMethod.EndingIn">
                        <PaymentSourceDetail type="last4" />
                      </Trans>
                    </PaymentSourceBrandNamePrimary>
                    <PaymentSourceBrandNameSecondary>
                      <Trans i18nKey="order.payments.paymentMethod.ValidUntil">
                        <PaymentSourceDetail type="exp_month" />
                        <PaymentSourceDetail type="exp_year" />
                      </Trans>
                    </PaymentSourceBrandNameSecondary>
                  </>
                )
              }}
            </PaymentSourceDetail>
          </PaymentSourceBrandNameWrapper>
        </PaymentSourceWrapper>
      </PaymentSource>
    </PaymentMethodsContainer>
  )
}

export default OrderPayments
