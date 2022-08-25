import { ReactNode } from "react"

import { Wrapper, IconWrapper, Label } from "./styled"

export type LabelProps = {
  icon: ReactNode | null | undefined
  variant?: string
}

interface ActionsMenuItemProps {
  label?: string
  icon?: ReactNode
  disabled?: boolean | false
  variant?: string
  onClick?: () => void
}

const ActionsMenuItem: React.FC<ActionsMenuItemProps> = (props) => {
  const {
    label = "Menu item",
    icon = undefined,
    disabled = false,
    variant = "default",
    onClick,
  } = props

  const handleClick = async () => {
    !disabled && onClick && onClick()
  }

  return (
    <Wrapper onClick={handleClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Label icon={icon} variant={variant}>
        {label}
      </Label>
    </Wrapper>
  )
}

export default ActionsMenuItem
