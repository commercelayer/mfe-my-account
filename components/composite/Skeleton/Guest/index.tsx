import {
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonTableRow,
  SkeletonTableTh,
  SkeletonTableTd,
} from "components/composite/Skeleton/styled"
import { LayoutDefault } from "components/layouts/LayoutDefault"

export const GuestSkeleton: React.FC = () => {
  return (
    <LayoutDefault
      isGuest={true}
      main={
        <SkeletonWrapper>
          <SkeletonHeader>
            <SkeletonTitle />
          </SkeletonHeader>
          <SkeletonTableRow>
            <SkeletonTableTh />
            <SkeletonTableTh />
            <SkeletonTableTh />
            <SkeletonTableTh />
          </SkeletonTableRow>
          <SkeletonTableRow>
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
          </SkeletonTableRow>
          <SkeletonTableRow>
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
          </SkeletonTableRow>
        </SkeletonWrapper>
      }
      aside={null}
    />
  )
}

export default GuestSkeleton
