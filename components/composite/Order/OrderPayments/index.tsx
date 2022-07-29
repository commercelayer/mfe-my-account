import {
  PaymentMethodsContainer,
  PaymentSource,
  PaymentSourceBrandIcon,
  PaymentSourceBrandName,
  PaymentSourceDetail,
} from "@commercelayer/react-components"
import { Order as CLayerOrder } from "@commercelayer/sdk"
import { Trans, useTranslation } from "react-i18next"

import { getTranslations } from "utils/payments"

interface Props {
  order?: CLayerOrder
}

const OrderPayments: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()
  const paymentSourceType =
    order && order?.payment_source_details
      ? order.payment_source_details.type
      : ""

  return (
    <PaymentMethodsContainer>
      <PaymentSource readonly>
        <PaymentSourceBrandIcon className="mr-2" />
        <PaymentSourceBrandName className="mr-1">
          {({ brand }) => {
            if (paymentSourceType === "credit_card") {
              return (
                <Trans i18nKey="order.paymentMethod.EndingIn">
                  {brand}
                  <PaymentSourceDetail
                    className="ml-1 font-normal"
                    type="last4"
                  />
                </Trans>
              )
            }
            return getTranslations(brand, t)
          }}
        </PaymentSourceBrandName>
      </PaymentSource>
    </PaymentMethodsContainer>
  )
}

export default OrderPayments
