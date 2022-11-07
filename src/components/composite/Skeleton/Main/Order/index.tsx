import {
  SkeletonWrapper,
  SkeletonCol,
  SkeletonSubtitle,
  SkeletonSpan,
  SkeletonTableRow,
  SkeletonTableImg,
  SkeletonSpacer,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

export const SkeletonMainOrder: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonCol className="mt-2 lg:mt-0">
        <SkeletonSubtitle />
        <SkeletonSpan />
        <SkeletonSpan size={"small"} className={"mt-1"} />
      </SkeletonCol>
      <SkeletonSpacer />
      <SkeletonSpacer />
      <SkeletonSpacer />
      <SkeletonSubtitle size={"medium"} />
      <SkeletonSpacer />
      <SkeletonSpacer />
      <SkeletonSpacer />
      <SkeletonTableRow align={"start"}>
        <SkeletonTableImg />
        <SkeletonCol className={"ml-4"}>
          <SkeletonSubtitle />
          <SkeletonSpan />
          <SkeletonSpan size={"small"} />
        </SkeletonCol>
      </SkeletonTableRow>
      <SkeletonSpacer />
      <SkeletonTableRow align={"start"}>
        <SkeletonTableImg />
        <SkeletonCol className={"ml-4"}>
          <SkeletonSubtitle />
          <SkeletonSpan />
          <SkeletonSpan size={"small"} />
        </SkeletonCol>
      </SkeletonTableRow>
      <SkeletonSpacer />
      <SkeletonSpacer />
      <SkeletonTableRow className="pl-[116px]">
        <SkeletonCol>
          <SkeletonSpan />
          <SkeletonSpan />
          <SkeletonSpan />
        </SkeletonCol>
        <SkeletonCol>
          <SkeletonSpan size={"small"} />
          <SkeletonSpan size={"small"} />
          <SkeletonSpan size={"small"} />
        </SkeletonCol>
      </SkeletonTableRow>
      <SkeletonSpacer />
      <SkeletonTableRow className="pl-[116px]">
        <SkeletonCol>
          <SkeletonSubtitle size={"medium"} />
        </SkeletonCol>
        <SkeletonCol>
          <SkeletonSubtitle size={"small"} />
        </SkeletonCol>
      </SkeletonTableRow>
    </SkeletonWrapper>
  )
}
