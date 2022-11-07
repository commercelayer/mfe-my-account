import { SkeletonMainOrders } from "src/components/composite/Skeleton/Main/Orders"
import {
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonTitle,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

export const SkeletonMainList: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonHeader>
        <SkeletonTitle />
      </SkeletonHeader>
      <SkeletonMainOrders />
    </SkeletonWrapper>
  )
}
