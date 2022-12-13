import styled from "styled-components"
import tw from "twin.macro"

import type { PrimaryButtonProps } from "."

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${tw` text-center font-semibold h-11 rounded-md shadow-sm disabled:opacity-50 hover:opacity-80 transition duration-500 ease-in-out`}
  ${({ buttonSize }) =>
    buttonSize === "small" ? tw`px-5 h-6 text-3xs` : tw`px-7 h-11 text-ss`}
  ${({ buttonStyle }) =>
    buttonStyle === "outline"
      ? tw`text-gray-600 bg-gray-200 border border-gray-300`
      : tw`text-white bg-primary`}
  ${({ onClick }) => onClick !== undefined && tw`cursor-pointer`}
`
