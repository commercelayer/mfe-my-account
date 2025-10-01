export type GridCardHover = "none"

interface Props {
  children: React.ReactNode
  hover?: GridCardHover
}

export function GridCard(props: Props): JSX.Element {
  const { children, hover } = props

  const classNames = `rounded-[5px] border border-gray-200 p-[1px] bg-white
    ${hover === undefined ? "hover:border-primary hover:border-2 hover:shadow-sm-primary hover:p-0" : ""}
  `

  return (
    <div className={classNames}>
      <div className="p-4">{children}</div>
    </div>
  )
}
