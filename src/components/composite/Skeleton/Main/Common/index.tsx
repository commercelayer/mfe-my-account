import {
  SkeletonHeader,
  SkeletonSubtitle,
} from "src/components/composite/Skeleton/styled"

export const SkeletonMainPageTitle: React.FC = () => {
  return (
    <SkeletonHeader className="mb-8 h-[32px]">
      <SkeletonSubtitle size="small" />
    </SkeletonHeader>
  )
}
