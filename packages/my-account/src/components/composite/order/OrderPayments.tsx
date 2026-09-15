import {
  PaymentMethodsContainer,
  PaymentSource,
} from "@commercelayer/react-components"
import type { JSX } from "react"

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
