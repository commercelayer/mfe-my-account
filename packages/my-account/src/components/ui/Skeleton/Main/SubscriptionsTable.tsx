import {
  SkeletonCol,
  SkeletonSpan,
  SkeletonTableRow,
  SkeletonTableTHead,
  SkeletonWrapper,
} from "#components/ui/Skeleton"

interface Props {
  visible?: boolean
}

function SkeletonMainSubscriptionsTableRow(): JSX.Element {
  return (
    <SkeletonTableRow className="relative items-center pb-12 mb-4 lg:mb-0 h-[107px] lg:h-[96px] md:pb-0">
      <SkeletonCol className="order-1 w-1/4 pt-6 pb-2.5 md:p-0 md:align-middle">
        <SkeletonSpan size="small" />
        <SkeletonSpan size="long" />
      </SkeletonCol>
      <SkeletonCol className="absolute right-0 order-2 w-1/4 bottom-4 md:bottom-auto md:relative md:text-left">
        <SkeletonSpan size="medium" className="self-end md:self-auto" />
      </SkeletonCol>
      <SkeletonCol className="absolute left-0 order-3 w-1/4 bottom-4 md:bottom-auto md:relative">
        <SkeletonSpan size="small" />
      </SkeletonCol>
      <SkeletonCol className="order-4 w-1/4 font-bold text-right md:text-left md:text-lg">
        <SkeletonSpan size="small" />
        <SkeletonSpan size="full" />
      </SkeletonCol>
    </SkeletonTableRow>
  )
}

export function SkeletonMainSubscriptionsTable({
  visible = true,
}: Props): JSX.Element {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonTableTHead className="items-center h-[18px]">
        <SkeletonCol className=" w-1/4">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/4">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/4">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/4">
          <SkeletonSpan size="small" />
        </SkeletonCol>
      </SkeletonTableTHead>
      <SkeletonMainSubscriptionsTableRow />
      <SkeletonMainSubscriptionsTableRow />
      <SkeletonMainSubscriptionsTableRow />
    </SkeletonWrapper>
  )
}
