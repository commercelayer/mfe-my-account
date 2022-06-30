import { ReactNode } from "react"
import styled from "styled-components"
import tw from "twin.macro"

interface ActionsMenuItemProps {
  label?: string,
  icon?: ReactNode | undefined,
  disabled?: boolean | false
  variant?: string
  onClick?: () => void
}

const ActionsMenuItem: React.FC<ActionsMenuItemProps> = (props) => {

  const {
    label = 'Menu item',
    icon = undefined,
    disabled = false,
    variant,
    onClick
  } = props

  const handleClick = async () => {
    onClick && onClick()
  }

  return (
    <Wrapper onClick={handleClick}>
      { icon !== undefined ? (
        <IconWrapper>{icon}</IconWrapper>
      ) : '' }
      <Label className={ icon === undefined ? 'ml-5' : '' }>{label}</Label>
    </Wrapper>
  ) 
}

export default ActionsMenuItem

const Wrapper = styled.div<ActionsMenuItemProps>`
  ${tw`flex items-center py-4 bg-white hover:bg-gray-200`}
  ${/*(disabled) => (disabled == true ? tw`` : tw``)*/ ``}
`

const IconWrapper = styled.div`
  ${tw`flex items-center`}
`

const Label = styled.p`
  ${tw`text-3xs`}
`