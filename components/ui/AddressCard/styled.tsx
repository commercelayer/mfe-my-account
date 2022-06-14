import { AddressField } from "@commercelayer/react-components"
import styled from "styled-components"
import tw from "twin.macro"

import { LinkButton } from "../LinkButton"

import { LinkButtonCss } from "components/ui/form/Button"

export const Wrapper = styled.div`
  ${tw`relative transition duration-200 ease-in h-36 px-5 pt-4 pb-2 border border-gray-350 rounded shadow-sm group-hover:(border-primary shadow-sm-primary)`}
`

export const Customer = styled.p`
  ${tw`font-bold text-md`}
`

export const Address = styled.p`
  ${tw`text-sm text-gray-600`}
`

export const ActionsWrapper = styled.div`
  ${tw`flex flex-col justify-end pt-4`}
`

export const Actions = styled.div`
  ${tw`flex justify-between tracking-wide`}
`

export const Text = styled.p`
  ${tw`text-ss`}
`
export const Overlay = styled.div`
  ${tw`absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full p-5 text-center text-white bg-gray-600 rounded-sm bg-black/95`}
`

export const ConfirmActions = styled.div`
  ${tw`flex justify-center w-full mt-3 px-5`}
`

export const EditButton = styled(AddressField)`
  ${LinkButtonCss}
  ${tw`group-hover:(text-primary)`}
`

export const DeleteButton = styled(LinkButton)`
  ${LinkButtonCss}
  ${tw`group-hover:(text-primary) bg-white`}
`

export const ConfirmDelete = styled(AddressField)`
  ${LinkButtonCss}
  ${tw`px-4 py-4 text-black rounded-xl bg-contrast flex items-center justify-center mx-0.5 w-14`}
`

export const ConfirmCancel = styled.a`
  ${LinkButtonCss}
  ${tw`px-4 py-4 text-black rounded-xl bg-contrast flex items-center justify-center mx-0.5 w-14`}
`
