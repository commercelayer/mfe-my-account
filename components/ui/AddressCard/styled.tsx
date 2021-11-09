import { AddressField } from "@commercelayer/react-components"
import styled from "styled-components"
import tw from "twin.macro"

import { LinkButtonCss } from "components/ui/form/Button"

interface StyledLinkButtonProps {
  variant?: string
}

const buttonVariants = {
  primary: tw`group-hover:(text-primary)`,
  warning: tw`group-hover:(text-red-400 border-red-100)`,
}

export const StyledActionLinkButton = styled(
  AddressField
)<StyledLinkButtonProps>`
  ${LinkButtonCss}

  ${({ variant = "primary" }) => buttonVariants[variant]}
`

export const Wrapper = styled.div`
  ${tw`relative transition duration-500 ease-in h-36 px-5 pt-4 pb-2 border border-gray-350 rounded shadow-sm group-hover:(border-primary shadow-sm-primary)`}
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
export const Overlay = styled.div`
  ${tw`absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full p-3 text-center text-white bg-gray-600 rounded bg-opacity-95`}
`
