import styled from "styled-components"
import tw from "twin.macro"

type WrapperProps = {
  isCurrentPage: boolean
}

export const Wrapper = styled.li<WrapperProps>`
  ${tw`flex h-8 items-center text-brand-black lg:text-gray-501 hover:(cursor-pointer text-gray-601)`}
  ${({ isCurrentPage }) => {
    return isCurrentPage && tw`lg:text-brand-black`
  }}
`

export const Icon = styled.div`
  ${tw`mr-2`}
`

export const TitleWrapper = styled.div`
  ${tw`flex-col pr-3`}
`

export const Title = styled.p`
  ${tw`text-sm md:text-base font-semibold`}
`

export const Description = styled.p`
  ${tw`text-ss`}
`
