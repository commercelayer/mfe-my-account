import type LinkButtonProps from "./props"
import { Button } from "./styled"

export function LinkButton({
  onClick,
  label,
  variant = "default",
}: LinkButtonProps): JSX.Element {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  )
}
