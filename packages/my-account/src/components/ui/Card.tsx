import cn from "classnames"

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
    <div
      className={cn(
        'px-5 lg:p-15 xl:pr-48 2xl:pr-15 md:bg-white shadow-sm',
        {
          'rounded-md': rounded,
          'relative min-h-full': fullHeight,
          'lg:pr-20 xl:pr-48': !centered,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
