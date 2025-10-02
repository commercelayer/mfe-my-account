import cn from "classnames"

export function SkeletonBox({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-gray-300 rounded-xl', className)}>{children}</div>
}

export function SkeletonCircle({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <SkeletonBox className={cn('rounded-full', className)}>{children}</SkeletonBox>
}

interface SkeletonWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean
}

export function SkeletonWrapper({ children, className, visible }: SkeletonWrapperProps) {
  return (
    <div className={cn('animate-pulse flex-shrink flex-grow', !visible && 'hidden', className)}>
      {children}
    </div>
  )
}

interface SkeletonColProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean
  noGap?: boolean
}

export function SkeletonCol({ children, className, padded, noGap }: SkeletonColProps) {
  return <div className={cn('flex flex-col', padded && 'lg:pl-12', !noGap && 'gap-3', className)}>
    {children}
  </div>
}

interface SkeletonRowProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean
}

export function SkeletonRow({ children, className, centered }: SkeletonRowProps) {
  return <div className={cn('flex flex-row gap-4', centered && 'items-center', className)}>
    {children}
  </div>
}

export function SkeletonHeader({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <SkeletonRow className={cn('items-center justify-between', className)}>{children}</SkeletonRow>
}

interface SkeletonSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string
}

export function SkeletonSubtitle({ className, size }: SkeletonSubtitleProps) {
  return <SkeletonBox className={cn(`h-5 ${size === "small" ? "w-20" : size === "medium" ? "w-40" : "w-60"}`, className)} />
}

export function SkeletonSpacer() {
  return <SkeletonBox className="w-40 h-6 bg-transparent" />
}

interface SkeletonTableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: string
}

export function SkeletonTableRow({ children, className, align }: SkeletonTableRowProps) {
  return <div className={cn('flex', align === "start" ? 'justify-items-start' : 'justify-between', className)}>{children}</div>
}

export function SkeletonTableTHead({ children, className, align }: SkeletonTableRowProps) {
  return <SkeletonTableRow align={align} className={cn('hidden md:flex', className)}>{children}</SkeletonTableRow>
}

interface SkeletonSpanProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "small-higher" | "medium" | "medium-higher" | "long" | "long-higher" | "full"
}

export function SkeletonSpan({ className, size }: SkeletonSpanProps) {
  let sizeCss = ''
  switch (size) {
    case "small":
      sizeCss = "w-16 h-3"
      break
    case "small-higher":
      sizeCss = "w-16 h-4"
      break
    case "medium":
      sizeCss = "w-24 h-3"
      break
    case "medium-higher":
      sizeCss = "w-24 h-4"
      break
    case "long":
      sizeCss = "w-32 h-3"
      break
    case "long-higher":
      sizeCss = "w-32 h-4"
      break
    case "full":
      sizeCss = "w-full h-3"
      break
    default:
      sizeCss = "w-36 h-3"
  }

  return <SkeletonBox className={cn('bg-gray-300 rounded', sizeCss, className)} />
}
