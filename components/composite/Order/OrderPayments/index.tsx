import {
  PaymentMethodsContainer,
  PaymentSource,
  PaymentSourceBrandIcon,
  PaymentSourceBrandName,
  PaymentSourceDetail,
} from "@commercelayer/react-components"
import { Order } from "@commercelayer/sdk"
import { Trans, useTranslation } from "react-i18next"

import {
  PaymentSourceWrapper,
  PaymentSourceBrandNameWrapper,
  CreditCardBrandNameWrapper,
  PaymentSourceBrandNamePrimary,
  PaymentSourceBrandNameSecondary,
} from "./styled"

import { getTranslations } from "utils/payments"

interface Props {
  order?: Order
}

const OrderPayments: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()

  return (
    <PaymentMethodsContainer>
      <PaymentSource readonly>
        <PaymentSourceWrapper>
          <PaymentSourceBrandIcon className="mr-2" />
          <PaymentSourceBrandNameWrapper>
            <PaymentSourceBrandName>
              {(props) => {
                if ((order?.payment_source?.type as string) === "credit_card") {
                  return (
                    <CreditCardBrandNameWrapper>
                      <PaymentSourceBrandNamePrimary>
                        {getTranslations(props?.brand, t)}
                      </PaymentSourceBrandNamePrimary>
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
                    </CreditCardBrandNameWrapper>
                  )
                }
                return (
                  <PaymentSourceBrandNamePrimary>
                    {getTranslations(props?.brand, t)}
                  </PaymentSourceBrandNamePrimary>
                )
              }}
            </PaymentSourceBrandName>
          </PaymentSourceBrandNameWrapper>
        </PaymentSourceWrapper>
      </PaymentSource>
    </PaymentMethodsContainer>
  )
}

export default OrderPayments
