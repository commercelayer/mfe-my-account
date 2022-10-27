import {
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonTableRow,
  SkeletonTableTh,
  SkeletonTableTd,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

export const SkeletonMain: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
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
