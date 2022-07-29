import { PrimaryButton } from "./styled"

export type PrimaryButtonProps = {
  label?: string
  onClick?: () => void
  buttonSize?: "small"
  buttonStyle?: "outline"
}

const Button: React.FC<PrimaryButtonProps> = ({
  label = "Click me",
  onClick,
  ...p
}) => {
  const handleClick = async () => {
    onClick && onClick()
  }

  return (
    <PrimaryButton label={label} onClick={handleClick} {...p}>
      {label}
    </PrimaryButton>
  )
}

export default Button
