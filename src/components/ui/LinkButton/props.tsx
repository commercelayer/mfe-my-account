type ButtonVariants = "default" | "warning"

type LinkButtonProps = {
  onClick?: () => void
  label?: string
  variant?: ButtonVariants
}

export default LinkButtonProps
