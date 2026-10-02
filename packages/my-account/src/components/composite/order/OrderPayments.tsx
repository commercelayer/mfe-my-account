import { PaymentMethod, PaymentSource } from "@commercelayer/react-components"
import { PaymentSourceRow } from "#components/composite/PaymentSourceRow"

function OrderPayments(): JSX.Element {
  return (
    <PaymentMethod>
      <PaymentSource readonly>
        <PaymentSourceRow />
      </PaymentSource>
    </PaymentMethod>
  )
}

export default OrderPayments
