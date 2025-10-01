type ButtonVariants = "default" | "warning"

interface LinkButtonProps {
  onClick?: () => void
  label?: string
  variant?: ButtonVariants
  className?: string
}

export function LinkButton({
  onClick,
  label,
  variant = "default",
  className,
}: LinkButtonProps): JSX.Element {
  const classNames = `text-ss font-semibold h-5 cursor-pointer border-b 
    ${variant === "default" ? "group-hover:text-primary" : "group-hover:text-red-400 group-hover:border-red-400 group-hover:border-opacity-10"}
    ${className ?? ''}
  `

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  )
}
