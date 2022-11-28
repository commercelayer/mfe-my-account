import { SkeletonMainPageTitle } from "#components/composite/Skeleton/Main/Common"
import { SkeletonMainOrdersTable } from "#components/composite/Skeleton/Main/OrdersTable"
import { SkeletonWrapper } from "#components/composite/Skeleton/styled"

interface Props {
  shown?: boolean
}

export const SkeletonMainOrders: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonMainPageTitle />
      <SkeletonMainOrdersTable />
    </SkeletonWrapper>
  )
}
