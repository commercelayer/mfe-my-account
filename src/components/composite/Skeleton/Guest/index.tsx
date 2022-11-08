import { SkeletonMainOrders } from "src/components/composite/Skeleton/Main"
import { LayoutDefault } from "src/components/layouts/LayoutDefault"

export const GuestSkeleton: React.FC = () => {
  return (
    <LayoutDefault isGuest={true} main={<SkeletonMainOrders />} aside={null} />
  )
}

export default GuestSkeleton
