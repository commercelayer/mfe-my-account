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

import { getTranslations } from "utils/payments"

const OrderPayments: React.FC = () => {
  const { t } = useTranslation()

  return (
    <PaymentMethodsContainer>
      <PaymentSource readonly>
        <PaymentSourceWrapper>
          <PaymentSourceBrandIcon className="mr-2" />
          <PaymentSourceBrandNameWrapper>
            <PaymentSourceBrandName>
              {(props) => (
                <PaymentSourceBrandNamePrimary>
                  {getTranslations(props?.brand, t)}
                </PaymentSourceBrandNamePrimary>
              )}
            </PaymentSourceBrandName>
            <PaymentSourceDetail type="last4">
              {(props) => {
                if (props.text === null || props.text.length === 0) return <></>
                return (
                  <>
                    <PaymentSourceBrandNamePrimary>
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
