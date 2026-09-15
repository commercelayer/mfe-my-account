import { CustomerPaymentSource } from "@commercelayer/react-components"
import type { JSX } from "react"

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
