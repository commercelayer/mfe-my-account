import { PrimaryButton } from "./styled"

export interface PrimaryButtonProps {
  label?: string
  className?: string
  onClick?: () => void
  buttonSize?: "small"
  buttonStyle?: "outline"
}

function Button({
  label = "Click me",
  className = "",
  onClick,
  ...p
}: PrimaryButtonProps): JSX.Element {
  const handleClick = async () => {
    onClick && onClick()
  }

  return (
    <PrimaryButton className={className} onClick={handleClick} {...p}>
      {label}
    </PrimaryButton>
  )
}

export default Button
