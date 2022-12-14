import styled from "styled-components"
import tw from "twin.macro"

import type LinkButtonProps from "./props"

export const Button = styled.button.attrs((props: LinkButtonProps) => ({
  variant: props.variant,
}))<LinkButtonProps>`
  ${tw`text-ss font-semibold h-5 cursor-pointer border-b`}

  ${({ variant }) =>
    variant === "default"
      ? tw`group-hover:(text-primary)`
      : tw`group-hover:(text-red-400 border-red-400 border-opacity-10)`}
`

export const Svg = styled.svg`
  ${tw`w-6 h-6 group-hover:(text-primary)`}
`
