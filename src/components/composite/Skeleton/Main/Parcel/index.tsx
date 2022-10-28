import {
  SkeletonWrapper,
  SkeletonRow,
  SkeletonCol,
  SkeletonSubtitle,
  SkeletonSpan,
  SkeletonSpacer,
  SkeletonRoundIcon,
  SkeletonRoundBackBtn,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

export const SkeletonMainParcel: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonRow centered className={"-mt-1"}>
        <SkeletonRoundBackBtn />
        <SkeletonSubtitle />
      </SkeletonRow>
      <SkeletonSpacer />
      <SkeletonCol padded className={"mt-4"}>
        <SkeletonSpan />
        <SkeletonSpan />
        <SkeletonSpacer />
        <SkeletonSpan />
        <SkeletonSpacer />
        <SkeletonCol className={"ml-2 -mt-2"}>
          <SkeletonRow>
            <SkeletonSpan size={"small"} />
            <SkeletonRoundIcon className={"-mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
          <SkeletonRow className={"mt-3"}>
            <SkeletonSpan size={"small"} />
            <SkeletonRoundIcon className={"-mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
          <SkeletonRow className={"mt-3"}>
            <SkeletonSpan size={"small"} />
            <SkeletonRoundIcon className={"-mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
        </SkeletonCol>
      </SkeletonCol>
    </SkeletonWrapper>
  )
}
