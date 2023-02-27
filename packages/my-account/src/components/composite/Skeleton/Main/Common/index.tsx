import {
  SkeletonHeader,
  SkeletonSubtitle,
  SkeletonRow,
  SkeletonCol,
  SkeletonTitle,
  SkeletonSpan,
  SkeletonCircle,
  SkeletonPaymentSourceBrandImage,
} from "#components/composite/Skeleton/styled"
import { DesktopOnly, MobileOnly } from "#components/ui/Common/styled"

export function SkeletonMainHeaderDesktop(): JSX.Element {
  return (
    <DesktopOnly>
      <SkeletonHeader className="h-[50px] mb-[64px]">
        <SkeletonTitle />
        <SkeletonRow className="items-center">
          <SkeletonSpan size={"medium"} />
          <SkeletonCircle className="w-8 h-8" />
        </SkeletonRow>
      </SkeletonHeader>
    </DesktopOnly>
  )
}

export function SkeletonMainHeaderMobile(): JSX.Element {
  return (
    <MobileOnly>
      <SkeletonHeader className="w-full h-[72px] mb-[42px]">
        <SkeletonCircle className="w-4 h-4" />
        <SkeletonTitle />
        <SkeletonCircle className="w-8 h-8" />
      </SkeletonHeader>
    </MobileOnly>
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
  const classNames = `mb-8 ${className}`

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
      <SkeletonPaymentSourceBrandImage />
      <SkeletonSpan size="medium" />
      <SkeletonSpan size="small" />
    </SkeletonCol>
  )
}
