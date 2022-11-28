import styled from "styled-components"
import tw from "twin.macro"

interface ShowHideMenuButtonIconProps {
  showHideMenu: boolean
}

export const ShowHideMenuWrapper = styled.div`
  ${tw``}
`

export const ShowHideMenuButton = styled.button`
  ${tw`text-xs text-primary flex items-center mb-4`}
`

export const ShowHideMenuButtonText = styled.span`
  ${tw`font-semibold border-b border-primary`}
`

export const ShowHideMenuButtonIcon = styled.div<ShowHideMenuButtonIconProps>`
  ${tw`ml-1 transition duration-300`}
  ${({ showHideMenu }) => showHideMenu && tw`rotate-180`}
`
