import LinkButtonProps from "./props"
import { Button, Svg } from "./styled"

export const LinkButton: React.FC<LinkButtonProps> = ({
  onClick,
  label,
  variant = "default",
}) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  )
}
