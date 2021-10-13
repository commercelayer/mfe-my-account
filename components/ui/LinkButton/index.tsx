import LinkButtonProps from "./props"
import { Button, Svg } from "./styled"

export const LinkButton: React.FC<LinkButtonProps> = ({
  action,
  label,
  variant = "default",
}) => {
  return (
    <Button variant={variant} onClick={action}>
      {label}
    </Button>
  )
}
