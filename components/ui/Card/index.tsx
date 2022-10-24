import { Wrapper } from "./styled"

type Props = {
  className?: string
  rounded?: boolean
  fullHeight?: boolean
  centered?: boolean
}

export const Card: React.FC<Props> = ({
  children,
  className,
  rounded,
  fullHeight,
  centered,
}) => (
  <Wrapper
    className={className}
    rounded={rounded}
    fullHeight={fullHeight}
    centered={centered}
  >
    {children}
  </Wrapper>
)
