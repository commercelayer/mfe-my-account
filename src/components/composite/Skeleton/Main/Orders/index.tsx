import { SkeletonMainPageTitle } from "#components/composite/Skeleton/Main/Common"
import { SkeletonMainOrdersTable } from "#components/composite/Skeleton/Main/OrdersTable"
import { SkeletonWrapper } from "#components/composite/Skeleton/styled"

interface Props {
  visible?: boolean
}

export const SkeletonMainOrders: React.FC<Props> = ({ visible = true }) => {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonMainPageTitle />
      <SkeletonMainOrdersTable />
    </SkeletonWrapper>
  )
}
