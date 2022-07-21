import styled from "styled-components"
import tw from "twin.macro"

import { LayoutGuest } from "components/layouts/LayoutGuest"

export const GuestSkeleton: React.FC = () => {
  return (
    <LayoutGuest
      main={
        <div className="mt-4 animate-pulse shrink grow basis-0">
          <div className="flex flex-row items-baseline justify-between">
            <SkeletonBox className="w-40 h-10" />
          </div>
          <div className="flex items-baseline justify-between mt-2 gap-4">
            <SkeletonBox className="w-1/4 h-8 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-8 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-8 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-8 mt-10 md:w-4/6 md:mt-5" />
          </div>
          <div className="flex items-baseline justify-between mt-2 gap-4">
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
          </div>
          <div className="flex items-baseline justify-between mt-2 gap-4">
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
            <SkeletonBox className="w-1/4 h-12 mt-10 md:w-4/6 md:mt-5" />
          </div>
        </div>
      }
    />
  )
}

const SkeletonBox = styled.div`
  ${tw`bg-gray-300 rounded-xl`}
`

export default GuestSkeleton
