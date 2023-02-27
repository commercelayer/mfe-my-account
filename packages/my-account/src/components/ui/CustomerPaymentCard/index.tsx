import { CustomerPaymentSource } from "@commercelayer/react-components/customers/CustomerPaymentSource"

import { GridCard } from "#components/ui/GridCard"
import { PaymentSourceCard } from "#components/ui/PaymentSource/Card"

function CustomerPaymentCard(): JSX.Element {
  return (
    <CustomerPaymentSource>
      <GridCard>
        <PaymentSourceCard />
      </GridCard>
    </CustomerPaymentSource>
  )
}

export default CustomerPaymentCard
