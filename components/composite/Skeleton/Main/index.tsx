import {
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonTableRow,
  SkeletonTableTh,
  SkeletonTableTd,
} from "components/composite/Skeleton/styled"

export const SkeletonMain: React.FC = () => {
  return (
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
  )
}

export default SkeletonMain
