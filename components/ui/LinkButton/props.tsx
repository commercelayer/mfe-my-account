type ButtonVariants = "default" | "warning"

interface LinkButtonProps {
  action?: () => void
  label?: string
  variant?: ButtonVariants
}

export default LinkButtonProps
