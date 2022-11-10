import {
  SkeletonWrapper,
  SkeletonTableRow,
  SkeletonTableTHead,
  SkeletonTableTh,
  SkeletonTableTd,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

export const SkeletonMainOrdersTable: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonTableTHead>
        <SkeletonTableTh />
        <SkeletonTableTh />
        <SkeletonTableTh />
        <SkeletonTableTh />
      </SkeletonTableTHead>
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
      <SkeletonTableRow>
        <SkeletonTableTd />
        <SkeletonTableTd />
        <SkeletonTableTd />
        <SkeletonTableTd />
      </SkeletonTableRow>
    </SkeletonWrapper>
  )
}
