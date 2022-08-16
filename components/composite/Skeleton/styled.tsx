import styled from "styled-components"
import tw from "twin.macro"

export const SkeletonBox = styled.div`
  ${tw`bg-gray-300 rounded-xl`}
`

export const SkeletonCircle = styled(SkeletonBox)`
  ${tw`rounded-full`}
`

export const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full min-w-1/3 md:(p-5) lg:(pl-20 pr-10 pt-10) xl:(pl-48) animate-pulse`}
`

export const SkeletonLogoWrapper = styled.div`
  ${tw`flex mb-12`}
`

export const SkeletonLogo = styled(SkeletonBox)`
  ${tw`w-48 h-10 bg-gray-200`}
`

export const SkeletonMenuItem = styled.div`
  ${tw`flex items-center`}
`

export const SkeletonMenuItemIcon = styled(SkeletonCircle)`
  ${tw`w-8 h-8 mr-5`}
`

export const SkeletonMenuItemLabel = styled(SkeletonBox)`
  ${tw`w-4/6 h-6`}
`

export const SkeletonWrapper = styled.div`
  ${tw`mt-4 animate-pulse flex-shrink flex-grow`}
`

export const SkeletonHeader = styled.div`
  ${tw`flex flex-row items-baseline justify-between`}
`

export const SkeletonTitle = styled(SkeletonBox)`
  ${tw`w-40 h-10`}
`

export const SkeletonTableRow = styled.div`
  ${tw`flex items-baseline justify-between mt-2 gap-4`}
`

export const SkeletonTableTh = styled(SkeletonBox)`
  ${tw`w-1/4 h-8 mt-10 md:w-4/6 md:mt-5`}
`

export const SkeletonTableTd = styled(SkeletonBox)`
  ${tw`w-1/4 h-12 mt-10 md:w-4/6 md:mt-5`}
`
