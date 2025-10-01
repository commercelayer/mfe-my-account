interface Props {
  children: React.ReactNode
  index: number
  header: React.ReactNode
}

export function OrderSection({
  children,
  noBorder,
}: {
  children: React.ReactNode
  noBorder?: boolean
}): JSX.Element {
  const classNames = `-mx-10 md:-mx-0 md:border-t overflow-hidden ${noBorder ? "md:border-none" : "md:border-t"}`
  return <div className={classNames}>{children}</div>
}

export function OrderSectionItem({
  children,
  index,
  header,
}: Props): JSX.Element {
  return (
    <div tabIndex={index} className={"outline-none bg-white shadow-bottom px-5 md:px-0 mb-6 md:mb-0 md:shadow-none md:border-b last-of-type:border-none"}>
      <div className="group text-black relative flex items-center justify-between transition ease duration-500 focus:bg-gray-400">
        <div className="transition ease duration-500 text-lg mt-12">{header}</div>
      </div>
      <div className="py-10">{children}</div>
    </div>
  )
}
