import {
  PaymentMethodsContainer,
  PaymentSource,
  PaymentSourceBrandIcon,
  PaymentSourceBrandName,
  PaymentSourceDetail,
} from "@commercelayer/react-components"
import { Trans, useTranslation } from "react-i18next"

import {
  PaymentSourceWrapper,
  PaymentSourceBrandNameWrapper,
  PaymentSourceBrandNamePrimary,
  PaymentSourceBrandNameSecondary,
} from "./styled"

import { getTranslations } from "src/utils/payments"

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
          <PaymentSourceBrandIcon className="mr-2" />
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
                      <Trans i18nKey="order.paymentMethod.EndingIn">
                        <PaymentSourceDetail type="last4" />
                      </Trans>
                    </PaymentSourceBrandNamePrimary>
                    <PaymentSourceBrandNameSecondary>
                      <Trans i18nKey="order.paymentMethod.ValidUntil">
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
