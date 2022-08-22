import {
  CustomerAddressForm,
  SaveAddressesButton,
} from "@commercelayer/react-components"
import { Dispatch } from "react"
import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`mt-0 absolute top-0 translate-y-5 opacity-0`}
`

export const Form = styled(CustomerAddressForm)`
  ${tw``}
`

export const Grid = styled.div`
  ${tw`grid lg:(grid-cols-2 gap-4)`}
`

interface DiscardChanges {
  onClick: Dispatch<boolean>
}

export const FormButtons = styled.div`
  ${tw`flex justify-between items-center pb-10`}
`

export const DiscardChanges = styled.div<DiscardChanges>`
  ${tw`flex items-center text-ss text-primary underline border-red-400 font-bold hover:(cursor-pointer)`}
`

export const SaveButton = styled(SaveAddressesButton)`
  ${tw`text-ss font-bold text-white bg-primary text-center px-24 h-11 rounded-md shadow-sm disabled:opacity-50`}
`

export const Text = styled.p`
  ${tw`ml-1.5 border-b border-green-400 border-gray-200/10 w-min md:w-auto`}
`
