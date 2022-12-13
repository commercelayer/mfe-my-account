import { Wrapper } from "./styled"

interface Props {
  children: React.ReactNode
  className?: string
  rounded?: boolean
  fullHeight?: boolean
  centered?: boolean
}

export function Card({
  children,
  className,
  rounded,
  fullHeight,
  centered,
}: Props): JSX.Element {
  return (
    <Wrapper
      className={className}
      rounded={rounded}
      fullHeight={fullHeight}
      centered={centered}
    >
      {children}
    </Wrapper>
  )
}
