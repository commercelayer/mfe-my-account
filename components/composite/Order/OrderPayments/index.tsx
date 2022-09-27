import {
  PaymentMethodsContainer,
  PaymentMethod,
  PaymentSource,
  PaymentSourceBrandIcon,
  PaymentSourceBrandName,
  PaymentSourceDetail,
} from "@commercelayer/react-components"
import { Order } from "@commercelayer/sdk"
import { Trans, useTranslation } from "react-i18next"

import { getTranslations } from "utils/payments"

interface Props {
  order?: Order
}

const OrderPayments: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()

  return (
    <PaymentMethodsContainer>
      <PaymentMethod>
        <PaymentSource readonly>
          <PaymentSourceBrandIcon className="mr-2" />
          <PaymentSourceBrandName className="mr-1" />
          {/* {({ brand }) => {
                if ((order?.payment_source?.type as string) === "credit_card") {
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
            </PaymentSourceBrandName> */}
        </PaymentSource>
      </PaymentMethod>
    </PaymentMethodsContainer>
  )
}

export default OrderPayments
