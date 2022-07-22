import { PrimaryButton } from "./styled"

export type PrimaryButtonProps = {
  label?: string
  onClick?: () => void
  buttonSize?: string
  buttonStyle?: string
}

const Button: React.FC<PrimaryButtonProps> = (props) => {
  const { label = "Click me", onClick, ...p } = props

  const handleClick = async () => {
    onClick && onClick()
  }

  return (
    <PrimaryButton onClick={handleClick} {...p}>
      {label}
    </PrimaryButton>
  )
}

export default Button
