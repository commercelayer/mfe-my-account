import { SkeletonMainOrdersTable } from "src/components/composite/Skeleton/Main/OrdersTable"
import {
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonTitle,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

export const SkeletonMainOrders: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonHeader>
        <SkeletonTitle />
      </SkeletonHeader>
      <SkeletonMainOrdersTable />
    </SkeletonWrapper>
  )
}
