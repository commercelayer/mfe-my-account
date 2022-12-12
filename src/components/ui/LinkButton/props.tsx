type ButtonVariants = "default" | "warning"

interface LinkButtonProps {
  onClick?: () => void
  label?: string
  variant?: ButtonVariants
}

export default LinkButtonProps
