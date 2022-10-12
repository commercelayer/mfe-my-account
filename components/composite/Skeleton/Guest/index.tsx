import SkeletonMain from "components/composite/Skeleton/Main"
import { LayoutDefault } from "components/layouts/LayoutDefault"

export const GuestSkeleton: React.FC = () => {
  return <LayoutDefault isGuest={true} main={<SkeletonMain />} aside={null} />
}

export default GuestSkeleton
