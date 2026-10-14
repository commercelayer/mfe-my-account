import { PaymentSource } from "@commercelayer/react-components"
import { PaymentSourceRow } from "#components/composite/PaymentSourceRow"

function OrderPayments(): JSX.Element {
  return (
    <PaymentSource readonly>
      <PaymentSourceRow />
    </PaymentSource>
  )
}

export default OrderPayments
