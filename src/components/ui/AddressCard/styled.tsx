import { AddressField } from "@commercelayer/react-components"
import styled from "styled-components"
import tw from "twin.macro"

import { LinkButtonCss } from "src/components/ui/form/Button"
import { LinkButton } from "src/components/ui/LinkButton"

export const Wrapper = styled.div`
  ${tw`relative transition duration-200 ease-in bg-white md:bg-transparent focus:shadow-sm`}
`
export const Content = styled.div`
  ${tw`px-5 py-4 rounded border border-gray-200 group-hover:(border-primary shadow-sm-primary)`}
`

export const Customer = styled.p`
  ${tw`font-bold text-md`}
`

export const Address = styled.p`
  ${tw`text-sm text-gray-400`}
`

export const ActionsWrapper = styled.div`
  ${tw`flex flex-col justify-end pt-4`}
`

export const Actions = styled.div`
  ${tw`flex justify-between tracking-wide`}
`

export const Text = styled.p`
  ${tw`text-sm font-bold`}
`
export const Overlay = styled.div`
  ${tw`absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full p-5 text-center bg-white border-2 border-red-400 rounded`}
`

export const ConfirmActions = styled.div`
  ${tw`flex justify-center w-full mt-3 px-5`}
`

export const EditButton = styled(AddressField)`
  ${LinkButtonCss}
  ${tw`text-gray-400 group-hover:(text-primary)`}
`

export const DeleteButtonWrapper = styled.div`
  ${tw`flex items-center gap-1 text-gray-400 group-hover:text-red-400`}
`

export const DeleteButton = styled(LinkButton)`
  ${LinkButtonCss}
  ${tw`group-hover:(text-primary) bg-white`}
`

export const ConfirmDelete = styled(AddressField)`
  ${LinkButtonCss}
  ${tw`px-5 h-6 text-3xs text-black rounded-md bg-red-400 text-white flex items-center justify-center mx-0.5`}
`

export const ConfirmCancel = styled.a`
  ${LinkButtonCss}
  ${tw`px-4 py-4 text-black rounded-xl bg-contrast flex items-center justify-center mx-0.5 w-14`}
`
