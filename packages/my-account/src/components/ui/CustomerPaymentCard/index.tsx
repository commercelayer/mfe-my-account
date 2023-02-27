import { CustomerPaymentSource } from "@commercelayer/react-components/customers/CustomerPaymentSource"

import { SkeletonMainWalletCard } from "#components/composite/Skeleton/Main/Common"
import { GridCard } from "#components/ui/GridCard"
import { PaymentSourceCard } from "#components/ui/PaymentSource/Card"

function CustomerPaymentCard(): JSX.Element {
  return (
    <CustomerPaymentSource loader={<SkeletonMainWalletCard noGap />}>
      <GridCard>
        <PaymentSourceCard />
      </GridCard>
    </CustomerPaymentSource>
  )
}

export default CustomerPaymentCard
