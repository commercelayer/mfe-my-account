import styled from "styled-components"
import tw from "twin.macro"

export const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full min-w-1/3 md:(p-5) lg:(pl-20 pr-10 pt-10) xl:(pl-48) animate-pulse`}
`
export const SkeletonBox = styled.div`
  ${tw`bg-gray-300 rounded-xl`}
`
export const SkeletonCircle = styled(SkeletonBox)`
  ${tw`rounded-full`}
`
