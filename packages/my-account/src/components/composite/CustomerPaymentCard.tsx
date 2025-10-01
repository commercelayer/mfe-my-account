import { CustomerPaymentSource } from "@commercelayer/react-components/customers/CustomerPaymentSource"

import { PaymentSourceCard } from "#components/composite/PaymentSourceCard"
import { SkeletonMainWalletCard } from "#components/ui/Skeleton/Main/Common"
import { GridCard } from "#components/ui/GridCard"

function CustomerPaymentCard(): JSX.Element {
  return (
    <CustomerPaymentSource loader={<SkeletonMainWalletCard noGap />}>
      <GridCard hover="none">
        <PaymentSourceCard />
      </GridCard>
    </CustomerPaymentSource>
  )
}

export default CustomerPaymentCard
