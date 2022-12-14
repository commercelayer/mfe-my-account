import { Fluid } from "./styled"

interface Props {
  children: React.ReactNode
}

export function Container({ children }: Props): JSX.Element {
  return <Fluid>{children}</Fluid>
}
