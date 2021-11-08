import { AddressField } from "@commercelayer/react-components"
import styled from "styled-components"
import tw from "twin.macro"

import { LinkButtonCss } from "components/ui/form/Button"

interface StyledLinkButtonProps {
  variant?: string
}

export const StyledActionLinkButton = styled(
  AddressField
)<StyledLinkButtonProps>`
  ${LinkButtonCss}
  ${({ variant }) =>
    variant === "default"
      ? tw`group-hover:(text-primary)`
      : tw`group-hover:(text-red-400 border-red-100)`}
`

export const StyledLinkButton = styled.button<StyledLinkButtonProps>`
  ${LinkButtonCss}
  ${({ variant }) =>
    variant === "default"
      ? tw`group-hover:(text-primary)`
      : tw`group-hover:(text-red-400 border-red-100)`}
`

export const Wrapper = styled.div`
  ${tw`transition duration-500 ease-in h-36 px-5 pt-4 pb-2 border border-gray-350 rounded shadow-sm group-hover:(border-primary shadow-sm-primary)`}
`

export const Customer = styled.p`
  ${tw`font-semibold text-md`}
`

export const Address = styled.p`
  ${tw`text-ss font-thin text-gray-500`}
`

export const ActionsWrapper = styled.div`
  ${tw`flex flex-col justify-end h-10`}
`

export const Actions = styled.div`
  ${tw`flex justify-between tracking-wide`}
`

export const Text = styled.p`
  ${tw`text-ss`}
`
