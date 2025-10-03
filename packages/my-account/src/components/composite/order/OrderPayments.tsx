import { PaymentMethodsContainer } from "@commercelayer/react-components/payment_methods/PaymentMethodsContainer"
import { PaymentSource } from "@commercelayer/react-components/payment_source/PaymentSource"

import { PaymentSourceRow } from "#components/composite/PaymentSourceRow"

function OrderPayments(): JSX.Element {
  return (
    <PaymentMethodsContainer>
      <PaymentSource readonly>
        <PaymentSourceRow />
      </PaymentSource>
    </PaymentMethodsContainer>
  )
}

export default OrderPayments
