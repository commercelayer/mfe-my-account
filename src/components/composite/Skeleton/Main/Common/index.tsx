import {
  SkeletonHeader,
  SkeletonSubtitle,
  SkeletonRow,
  SkeletonCol,
  SkeletonTitle,
  SkeletonSpan,
  SkeletonCircle,
} from "#components/composite/Skeleton/styled"
import { DesktopOnly, MobileOnly } from "#components/ui/Common/styled"

export const SkeletonMainHeaderDesktop: React.FC = () => {
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

export const SkeletonMainHeaderMobile: React.FC = () => {
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

export const SkeletonMainHeader: React.FC = () => {
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

export const SkeletonMainPageTitle: React.FC<SkeletonMainPageTitleProps> = ({
  additionalContent,
  className,
}) => {
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

export const SkeletonMainAddressCard: React.FC<
  SkeletonMainAddressCardProps
> = ({ showActions }) => {
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
