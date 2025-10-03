import cn from "classnames"

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
  return (
    <button 
      className={cn(
        'text-ss font-semibold h-5 cursor-pointer border-b',
        {
          'group-hover:text-primary': variant === "default",
          'group-hover:text-red-400 group-hover:border-red-400 group-hover:border-opacity-10': variant !== "default",
        },
        className
      )} 
      onClick={onClick}
    >
      {label}
    </button>
  )
}
