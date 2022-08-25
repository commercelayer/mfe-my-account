import { PrimaryButton } from "./styled"

export type PrimaryButtonProps = {
  label?: string
  className?: string
  onClick?: () => void
  buttonSize?: "small"
  buttonStyle?: "outline"
}

const Button: React.FC<PrimaryButtonProps> = ({
  label = "Click me",
  className = "",
  onClick,
  ...p
}) => {
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
