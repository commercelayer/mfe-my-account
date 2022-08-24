import styled from "styled-components"
import tw from "twin.macro"

interface WrapperProps {
  showActionsMenu: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${tw`relative flex justify-end`}
  ${({ showActionsMenu }) => showActionsMenu && tw`z-10`}
`

export const ActionsMenuWrapper = styled.div`
  ${tw`absolute mt-2 top-[24px] right-0 bg-white overflow-hidden rounded-xl shadow w-[165px]`}
`
