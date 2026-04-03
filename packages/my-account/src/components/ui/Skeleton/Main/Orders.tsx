import { SkeletonWrapper } from "#components/ui/Skeleton"
import { SkeletonMainPageTitle } from "#components/ui/Skeleton/Main/Common"
import { SkeletonMainOrdersTable } from "#components/ui/Skeleton/Main/OrdersTable"

interface Props {
  visible?: boolean
}

export function SkeletonMainOrders({ visible = true }: Props) {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonMainPageTitle />
      <SkeletonMainOrdersTable />
    </SkeletonWrapper>
  )
}
