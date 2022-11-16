import {
  Errors,
  AddressInput,
  AddressStateSelector,
  AddressCountrySelector,
} from "@commercelayer/react-components"
import styled from "styled-components"
import tw from "twin.macro"

import { ErrorCss } from "src/components/ui/form/Error"
import { InputCss } from "src/components/ui/form/Input"

export const Wrapper = styled.div`
  position: relative;
`

export const StyledAddressInput = styled(AddressInput)`
  ${InputCss}
  &.hasError {
    ${tw`border-red-400 border-2 focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-50`}
  }
`

export const StyledAddressCountrySelector = styled(AddressCountrySelector)`
  ${InputCss}
`

export const StyledAddressStateSelector = styled(AddressStateSelector)`
  ${InputCss}
  &.hasError {
    ${tw`border-red-400 border-2 focus:ring-offset-0 focus:ring-red-400 focus:ring-opacity-50`}
  }
`

export const StyledErrors = styled(Errors)`
  ${ErrorCss}
`
