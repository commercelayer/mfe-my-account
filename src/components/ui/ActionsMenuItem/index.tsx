import { Wrapper, IconWrapper, Label } from "./styled"

export type LabelProps = {
  icon: React.ReactNode | null | undefined
  variant?: string
}

type Props = {
  label?: string
  icon?: React.ReactNode
  disabled?: boolean | false
  variant?: string
  onClick?: () => void
}

const ActionsMenuItem: React.FC<Props> = (props) => {
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
