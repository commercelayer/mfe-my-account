import { SkeletonMainList } from "src/components/composite/Skeleton/Main"
import { LayoutDefault } from "src/components/layouts/LayoutDefault"

export const GuestSkeleton: React.FC = () => {
  return (
    <LayoutDefault isGuest={true} main={<SkeletonMainList />} aside={null} />
  )
}

export default GuestSkeleton
