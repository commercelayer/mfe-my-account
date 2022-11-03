import styled from "styled-components"
import tw from "twin.macro"

type SkeletonWrapperProps = {
  shown: boolean
}

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

export const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
  ${tw`mt-4 animate-pulse flex-shrink flex-grow`}
  ${({ shown }) => !shown && tw`hidden`}
`

type SkeletonColProps = {
  padded?: boolean
}

export const SkeletonCol = styled.div<SkeletonColProps>`
  ${tw`flex flex-col gap-3`}
  ${({ padded }) => padded && tw`lg:pl-12`}
`

type SkeletonRowProps = {
  centered?: boolean
}

export const SkeletonRow = styled.div<SkeletonRowProps>`
  ${tw`flex flex-row gap-4`}
  ${({ centered }) => centered && tw`items-center`}
`

export const SkeletonHeader = styled(SkeletonRow)`
  ${tw`items-baseline justify-between`}
`

export const SkeletonTitle = styled(SkeletonBox)`
  ${tw`w-40 h-10`}
`

type SkeletonSubtitle = {
  size?: string
}

export const SkeletonSubtitle = styled(SkeletonBox)<SkeletonSubtitle>`
  ${tw`h-5`}
  ${({ size }) => {
    if (size === "small") return tw`w-20`
    if (size === "medium") return tw`w-40`
    return tw`w-60`
  }}
`

type SkeletonSpanProps = {
  size?: string
}

export const SkeletonSpan = styled(SkeletonBox)<SkeletonSpanProps>`
  ${tw`h-3`}
  ${({ size }) => {
    if (size === "small") return tw`w-16`
    if (size === "medium") return tw`w-24`
    if (size === "long") return tw`w-32`
    return tw`w-36`
  }}
`

export const SkeletonSpacer = styled(SkeletonBox)`
  ${tw`w-40 h-6 bg-transparent`}
`

export const SkeletonRoundIcon = styled(SkeletonCircle)`
  ${tw`w-[24px] h-[24px]`}
`

export const SkeletonRoundBackBtn = styled(SkeletonCircle)`
  ${tw`w-[38px] h-[38px]`}
`

type SkeletonTableRowProps = {
  align?: string
}

export const SkeletonTableRow = styled.div<SkeletonTableRowProps>`
  ${tw`flex h-[107px] my-4 gap-4 bg-gray-300 lg:(bg-transparent h-auto)`}
  ${({ align }) =>
    align === "start"
      ? tw`justify-items-start`
      : tw`justify-between items-baseline`}
`

export const SkeletonTableTHead = styled(SkeletonTableRow)`
  ${tw`hidden lg:flex`}
`

export const SkeletonTableTh = styled(SkeletonBox)`
  ${tw`w-1/4 h-4 md:w-4/6`}
`

export const SkeletonTableTd = styled(SkeletonBox)`
  ${tw`w-1/4 h-12 my-2 md:w-4/6 md:my-4`}
`

export const SkeletonTableImg = styled(SkeletonBox)`
  ${tw`flex-shrink-0 w-[85px] h-[85px] `}
`
