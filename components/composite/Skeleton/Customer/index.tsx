import { LayoutDefault } from "components/layouts/LayoutDefault"

import { Sidebar, SkeletonBox, SkeletonCircle } from "./styled"

export const CustomerSkeleton: React.FC = () => {
  return (
    <LayoutDefault
      isGuest={false}
      aside={
        <Sidebar>
          <div className="flex mb-12">
            <SkeletonBox className="w-48 h-10 bg-gray-200" />
          </div>
          <div className="flex items-center mt-12">
            <div className="w-8 mr-5">
              <SkeletonCircle className="w-8 h-8" />
            </div>
            <div className="w-full">
              <SkeletonBox className="w-4/6 h-6" />
            </div>
          </div>
          <div className="flex items-center mt-7">
            <div className="w-8 mr-5">
              <SkeletonCircle className="w-8 h-8" />
            </div>
            <div className="w-full">
              <SkeletonBox className="w-4/6 h-6" />
            </div>
          </div>
          <div className="flex items-center mt-7">
            <div className="w-8 mr-5">
              <SkeletonCircle className="w-8 h-8" />
            </div>
            <div className="w-full">
              <SkeletonBox className="w-4/6 h-6" />
            </div>
          </div>
          <div className="flex items-center mt-7">
            <div className="w-8 mr-5">
              <SkeletonCircle className="w-8 h-8" />
            </div>
            <div className="w-full">
              <SkeletonBox className="w-4/6 h-6" />
            </div>
          </div>
          <div className="flex items-center mt-32">
            <div className="w-8 mr-5">
              <SkeletonCircle className="w-8 h-8" />
            </div>
            <div className="w-full">
              <SkeletonBox className="w-4/6 h-6" />
            </div>
          </div>
          <div className="flex items-center mt-7">
            <div className="w-8 mr-5">
              <SkeletonCircle className="w-8 h-8" />
            </div>
            <div className="w-full">
              <SkeletonBox className="w-4/6 h-6" />
            </div>
          </div>
        </Sidebar>
      }
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

export default CustomerSkeleton
