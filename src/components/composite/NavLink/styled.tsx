import styled from "styled-components"
import tw from "twin.macro"

type WrapperProps = {
  isCurrentPage: boolean
  comingSoon?: boolean
}

export const Wrapper = styled.li<WrapperProps>`
  ${tw`flex h-8 items-center select-none`}
  ${({ comingSoon }) =>
    !comingSoon && tw`text-gray-500 hover:(cursor-pointer text-gray-600)`}
  ${({ comingSoon }) => comingSoon && tw`text-gray-400`}
  ${({ isCurrentPage }) => isCurrentPage && tw`text-black`}
`

type IconProps = {
  comingSoon?: boolean
}

export const Icon = styled.div<IconProps>`
  ${tw`mr-2`}
  ${({ comingSoon }) => comingSoon && tw`text-gray-300`}
`

export const TitleWrapper = styled.div`
  ${tw`flex items-center pr-3`}
`

export const Title = styled.p`
  ${tw`text-sm md:text-base font-semibold`}
`

export const ComingSoon = styled.span`
  ${tw`ml-1 uppercase px-[4px] py-[2px] text-[9px] leading-[9px] font-bold rounded text-white bg-orange-400`}
`

export const Description = styled.p`
  ${tw`text-ss`}
`
