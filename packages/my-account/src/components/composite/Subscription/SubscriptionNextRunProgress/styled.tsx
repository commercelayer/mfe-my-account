import styled from "styled-components"
import tw from "twin.macro"

export type ProgressTitleVariant = "list" | "detail"

interface ProgressTitleProps {
  variant: ProgressTitleVariant
}

export const ProgressTitle = styled.p<ProgressTitleProps>`
  ${tw`inline-block text-xs font-bold text-gray-400 rounded-full md:h-5 md:px-0`}
`
