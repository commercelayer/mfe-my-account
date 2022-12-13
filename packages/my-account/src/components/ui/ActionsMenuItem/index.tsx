import { Wrapper, IconWrapper, Label } from "./styled"

export interface LabelProps {
  icon: React.ReactNode | null | undefined
  variant?: string
}

interface Props {
  label?: string
  icon?: React.ReactNode
  disabled?: boolean | false
  variant?: string
  onClick?: () => void
}

function ActionsMenuItem(props: Props): JSX.Element {
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
