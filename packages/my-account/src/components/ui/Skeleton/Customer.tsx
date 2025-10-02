import cn from "classnames"

import { LayoutDefault } from "#components/layouts/LayoutDefault"
import { SkeletonBox, SkeletonCircle } from "#components/ui/Skeleton"
import {
  SkeletonMainHeader,
  SkeletonMainLoader,
} from "#components/ui/Skeleton/Main"

interface MenuItemProps {
  className?: string
}

function MenuItem({ className }: MenuItemProps): JSX.Element {
  return (
    <div className={cn('flex items-center h-[32px] mb-[18px]', className)}>
      <SkeletonCircle className="w-4 h-4 mr-2" />
      <SkeletonBox className="w-1/3 h-4" />
    </div>
  )
}

export function SkeletonCustomer(): JSX.Element {
  return (
    <LayoutDefault
      isGuest={false}
      aside={
        <div className="flex flex-col min-h-full p-5 lg:p-15 lg:sticky lg:top-8 xl:pl-48 animate-pulse">
          <div className="flex items-center mb-16 w-[240px] h-[50px]">
            <SkeletonBox className="w-48 h-10 bg-gray-200" />
          </div>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      }
      main={
        <div className="animate-pulse">
          <SkeletonMainHeader />
          <SkeletonMainLoader />
        </div>
      }
    />
  )
}

export default SkeletonCustomer
