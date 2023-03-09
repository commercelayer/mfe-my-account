import styled from "styled-components"
import tw from "twin.macro"

interface SkeletonWrapperProps {
  visible: boolean
}

export const SkeletonBox = styled.div`
  ${tw`bg-gray-300 rounded-xl`}
`

export const SkeletonCircle = styled(SkeletonBox)`
  ${tw`rounded-full`}
`

export const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full p-5 lg:(p-15 sticky top-8) xl:pl-48 animate-pulse`}
`

export const Main = styled.div`
  ${tw`animate-pulse`}
`

export const SkeletonLogoWrapper = styled.div`
  ${tw`flex items-center mb-16 w-[240px] h-[50px]`}
`

export const SkeletonLogo = styled(SkeletonBox)`
  ${tw`w-48 h-10 bg-gray-200`}
`

export const SkeletonMenuItem = styled.div`
  ${tw`flex items-center h-[32px] mb-[18px]`}
`

export const SkeletonMenuItemIcon = styled(SkeletonCircle)`
  ${tw`w-4 h-4 mr-2`}
`

export const SkeletonMenuItemLabel = styled(SkeletonBox)`
  ${tw`w-1/3 h-4`}
`

export const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
  ${tw`animate-pulse flex-shrink flex-grow`}
  ${({ visible }) => !visible && tw`hidden`}
`

interface SkeletonColProps {
  padded?: boolean
  noGap?: boolean
}

export const SkeletonCol = styled.div<SkeletonColProps>`
  ${tw`flex flex-col`}
  ${({ padded }) => padded && tw`lg:pl-12`}
  ${({ noGap }) => !noGap && tw`gap-3`}
`

interface SkeletonRowProps {
  centered?: boolean
}

export const SkeletonRow = styled.div<SkeletonRowProps>`
  ${tw`flex flex-row gap-4`}
  ${({ centered }) => centered && tw`items-center`}
`

export const SkeletonHeader = styled(SkeletonRow)`
  ${tw`items-center justify-between`}
`

export const SkeletonButton = styled(SkeletonBox)`
  ${tw`h-14`}
`

export const SkeletonTitle = styled(SkeletonBox)`
  ${tw`w-40 h-10`}
`

interface SkeletonSubtitleProps {
  size?: string
}

export const SkeletonSubtitle = styled(SkeletonBox)<SkeletonSubtitleProps>`
  ${tw`h-5`}
  ${({ size }) => {
    if (size === "small") return tw`w-20`
    if (size === "medium") return tw`w-40`
    return tw`w-60`
  }}
`

interface SkeletonSpanProps {
  size?: string
}

export const SkeletonSpan = styled(SkeletonBox)<SkeletonSpanProps>`
  ${({ size }) => {
    if (size === "small") return tw`w-16 h-3`
    if (size === "small-higher") return tw`w-16 h-4`
    if (size === "medium") return tw`w-24 h-3`
    if (size === "medium-higher") return tw`w-24 h-4`
    if (size === "long") return tw`w-32 h-3`
    if (size === "long-higher") return tw`w-32 h-4`
    return tw`w-36 h-3`
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

interface SkeletonTableRowProps {
  align?: string
}

export const SkeletonTableRow = styled.div<SkeletonTableRowProps>`
  ${tw`flex`}
  ${({ align }) =>
    align === "start" ? tw`justify-items-start` : tw`justify-between`}
`

export const SkeletonTableTHead = styled(SkeletonTableRow)`
  ${tw`hidden md:flex`}
`

export const SkeletonTableImg = styled(SkeletonBox)`
  ${tw`flex-shrink-0 w-[75px] h-[75px] md:(w-[85px] h-[85px]) `}
`

export const SkeletonPaymentSourceBrandImage = styled(SkeletonBox)`
  ${tw`w-[50px] h-[34px] mb-4`}
`
