interface Props {
  children: React.ReactNode
  className?: string
}

export function GridContainer(props: Props): JSX.Element {
  const { children, className } = props

  return (
    <div className={`grid gap-6 mb-6 lg:grid-cols-2 ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}
