import { SkeletonMainOrders } from "#components/composite/Skeleton/Main"
import { LayoutDefault } from "#components/layouts/LayoutDefault"

export const GuestSkeleton: React.FC = () => {
  return (
    <LayoutDefault isGuest={true} main={<SkeletonMainOrders />} aside={null} />
  )
}

export default GuestSkeleton
