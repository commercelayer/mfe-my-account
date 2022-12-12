import {
  SkeletonWrapper,
  SkeletonRow,
  SkeletonCol,
  SkeletonSubtitle,
  SkeletonSpan,
  SkeletonSpacer,
  SkeletonRoundIcon,
  SkeletonRoundBackBtn,
} from "#components/composite/Skeleton/styled"

export const SkeletonMainParcel: React.FC = () => {
  return (
    <SkeletonWrapper visible={true}>
      <SkeletonRow centered className={"pt-4 lg:pt-0"}>
        <SkeletonRoundBackBtn />
        <SkeletonSubtitle />
      </SkeletonRow>
      <SkeletonSpacer />
      <SkeletonCol padded className={"mt-4"}>
        <SkeletonSpan />
        <SkeletonSpan />
        <SkeletonSpacer />
        <SkeletonSpan size="medium" />
        <SkeletonSpacer />
        <SkeletonCol className={"ml-2 mt-1"}>
          <SkeletonRow className={"-mt-1"}>
            <SkeletonSpan size={"small"} />
            <SkeletonRoundIcon className={"-mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
          <SkeletonRow className={"mt-8"}>
            <SkeletonSpan size={"small"} />
            <SkeletonRoundIcon className={"-mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
          <SkeletonRow className={"mt-8"}>
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
