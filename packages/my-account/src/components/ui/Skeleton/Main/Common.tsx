import {
  SkeletonBox,
  SkeletonCircle,
  SkeletonCol,
  SkeletonHeader,
  SkeletonSpan,
  SkeletonSubtitle,
  SkeletonRow
} from "#components/ui/Skeleton"

export function SkeletonMainHeaderDesktop(): JSX.Element {
  return (
    <div className="hidden lg:block">
      <SkeletonHeader className="h-[50px] mb-[64px]">
        <SkeletonBox className="w-40 h-10" />
        <SkeletonRow className="items-center">
          <SkeletonSpan size={"medium"} />
          <SkeletonCircle className="w-8 h-8" />
        </SkeletonRow>
      </SkeletonHeader>
    </div>
  )
}

export function SkeletonMainHeaderMobile(): JSX.Element {
  return (
    <div className="block lg:hidden">
      <SkeletonHeader className="w-full h-[72px] mb-[42px]">
        <SkeletonCircle className="w-4 h-4" />
        <SkeletonBox className="w-40 h-10" />
        <SkeletonCircle className="w-8 h-8" />
      </SkeletonHeader>
    </div>
  )
}

export function SkeletonMainHeader(): JSX.Element {
  return (
    <>
      <SkeletonMainHeaderDesktop />
      <SkeletonMainHeaderMobile />
    </>
  )
}

interface SkeletonMainPageTitleProps {
  additionalContent?: React.ReactNode
  className?: string
}

export function SkeletonMainPageTitle({
  additionalContent,
  className,
}: SkeletonMainPageTitleProps): JSX.Element {
  const classNames = `mb-8 ${className ?? ''}`

  return (
    <SkeletonCol noGap className={classNames}>
      <SkeletonRow centered className="h-[32px]">
        <SkeletonSubtitle size="small" />
      </SkeletonRow>
      {additionalContent && <div className="block">{additionalContent}</div>}
    </SkeletonCol>
  )
}

interface SkeletonMainAddressCardProps {
  showActions?: boolean
}

export function SkeletonMainAddressCard({
  showActions,
}: SkeletonMainAddressCardProps): JSX.Element {
  return (
    <SkeletonCol className="p-4 mt-4">
      <SkeletonSubtitle size="medium" />
      <SkeletonSpan />
      <SkeletonSpan />
      <SkeletonSpan />
      {showActions && (
        <SkeletonRow className="mt-2">
          <SkeletonSpan size={"small"} />
          <SkeletonSpan size={"small"} className="ml-36" />
        </SkeletonRow>
      )}
    </SkeletonCol>
  )
}

interface SkeletonMainWalletCardProps {
  noGap?: boolean
}

export function SkeletonMainWalletCard({
  noGap = false,
}: SkeletonMainWalletCardProps): JSX.Element {
  const className = `p-4 ${!noGap && "mt-4"}`

  return (
    <SkeletonCol className={className}>
      <SkeletonBox className="w-[50px] h-[34px] mb-4" />
      <SkeletonSpan size="medium" />
      <SkeletonSpan size="small" />
    </SkeletonCol>
  )
}
