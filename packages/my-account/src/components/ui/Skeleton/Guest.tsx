import { LayoutDefault } from "#components/layouts/LayoutDefault"
import { SkeletonMainOrders } from "#components/ui/Skeleton/Main"

export function SkeletonGuest(): JSX.Element {
  return (
    <LayoutDefault isGuest={true} main={<SkeletonMainOrders />} aside={null} />
  )
}

export default SkeletonGuest
