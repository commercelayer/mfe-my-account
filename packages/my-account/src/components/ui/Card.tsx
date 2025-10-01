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
  const classNames = `px-5 lg:p-15 xl:pr-48 2xl:pr-15 md:bg-white shadow-sm
    ${rounded ? `rounded-md` : null}
    ${fullHeight ? `relative min-h-full ` : null}
    ${centered ? null : ` lg:pr-20 xl:pr-48 `}
    ${className ?? ''}
  `

  return (
    <div
      className={classNames}
    >
      {children}
    </div>
  )
}
