import { SkeletonMainPageTitle } from "src/components/composite/Skeleton/Main/Common"
import { SkeletonMainOrdersTable } from "src/components/composite/Skeleton/Main/OrdersTable"
import { SkeletonWrapper } from "src/components/composite/Skeleton/styled"

type Props = {
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
