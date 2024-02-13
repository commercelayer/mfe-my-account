import styled from "styled-components"
import tw from "twin.macro"

export type ProgressTitleVariant = 'list' | 'detail'

interface ProgressTitleProps {
  variant: ProgressTitleVariant
}

export const ProgressTitle = styled.p<ProgressTitleProps>`
  ${tw`md:absolute top-5 inline-block text-sm font-bold text-gray-400 bg-gray-200 px-3 rounded-full h-5 md:(bg-contrast px-0)`}
  ${({variant}) => variant == 'list' ? tw`top-5 text-sm` : tw`top-4 text-xs`}
`
