import { CustomerPaymentSource } from "@commercelayer/react-components/customers/CustomerPaymentSource"

import { PaymentSourceCard } from "#components/composite/PaymentSourceCard"
import { SkeletonMainWalletCard } from "#components/ui/Skeleton/Main/Common"

function CustomerPaymentCard(): JSX.Element {
  return (
    <CustomerPaymentSource loader={<SkeletonMainWalletCard noGap />}>
      <PaymentSourceCard />
    </CustomerPaymentSource>
  )
}

export default CustomerPaymentCard
