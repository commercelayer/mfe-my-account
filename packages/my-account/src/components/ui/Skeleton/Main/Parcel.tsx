import {
  SkeletonCircle,
  SkeletonCol,
  SkeletonRow,
  SkeletonSpacer,
  SkeletonSpan,
  SkeletonSubtitle,
  SkeletonWrapper,
} from "#components/ui/Skeleton"

export function SkeletonMainParcel(): JSX.Element {
  return (
    <SkeletonWrapper visible={true}>
      <SkeletonRow centered className={"pt-4 lg:pt-0"}>
        <SkeletonCircle className="w-[38px] h-[38px]" />
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
            <SkeletonCircle className={"w-[24px] h-[24px] -mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
          <SkeletonRow className={"mt-8"}>
            <SkeletonSpan size={"small"} />
            <SkeletonCircle className={"w-[24px] h-[24px] -mt-1"} />
            <SkeletonCol>
              <SkeletonSpan size={"long"} />
              <SkeletonSpan size={"medium"} />
              <SkeletonSpan size={"small"} />
            </SkeletonCol>
          </SkeletonRow>
          <SkeletonRow className={"mt-8"}>
            <SkeletonSpan size={"small"} />
            <SkeletonCircle className={"w-[24px] h-[24px] -mt-1"} />
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
