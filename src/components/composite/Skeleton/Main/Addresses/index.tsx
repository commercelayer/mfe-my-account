import {
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonCol,
  SkeletonRow,
  SkeletonSubtitle,
  SkeletonSpan,
  SkeletonButton,
  SkeletonSpacer,
} from "src/components/composite/Skeleton/styled"

interface Props {
  shown?: boolean
}

const SkeletonAddress: React.FC = () => {
  return (
    <SkeletonCol className="p-4 mt-4">
      <SkeletonSubtitle size="medium" />
      <SkeletonSpan />
      <SkeletonSpan />
      <SkeletonSpan />
      <SkeletonRow className="mt-2">
        <SkeletonSpan size={"small"} />
        <SkeletonSpan size={"small"} className="ml-36" />
      </SkeletonRow>
    </SkeletonCol>
  )
}

export const SkeletonMainAddresses: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonHeader>
        <SkeletonSubtitle size="small" />
      </SkeletonHeader>
      <SkeletonSpacer />
      <SkeletonAddress />
      <SkeletonButton className="w-full mt-8" />
    </SkeletonWrapper>
  )
}
