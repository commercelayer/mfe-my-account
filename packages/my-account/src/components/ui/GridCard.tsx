import cn from "classnames"

export type GridCardHover = "none"

interface Props {
  children: React.ReactNode
  hover?: GridCardHover
}

export function GridCard(props: Props): JSX.Element {
  const { children, hover } = props

  return (
    <div className={cn('group rounded-[5px] border border-gray-200 p-[1px] bg-white', {
      "hover:border-primary hover:border-2 hover:shadow-sm-primary hover:p-0": hover === undefined
    })}>
      <div className="p-4">{children}</div>
    </div>
  )
}
