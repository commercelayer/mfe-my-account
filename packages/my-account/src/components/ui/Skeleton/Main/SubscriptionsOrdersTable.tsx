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

function SkeletonMainSubscriptionsOrdersTableRow(): JSX.Element {
  return (
    <SkeletonTableRow className="flex items-center h-[44px]">
      <SkeletonCol className="order-1 w-1/5">
        <SkeletonSpan size="small" />
        <SkeletonSpan size="medium" />
      </SkeletonCol>
      <SkeletonCol className="order-2 w-1/5">
        <SkeletonSpan size="medium" />
      </SkeletonCol>
      <SkeletonCol className="order-3 w-1/5">
        <SkeletonSpan size="small" />
      </SkeletonCol>
      <SkeletonCol className="order-4 w-1/5">
        <SkeletonSpan size="small-higher" />
      </SkeletonCol>
      <SkeletonCol className="order-5 w-1/5">
        <SkeletonSpan size="small-higher" />
      </SkeletonCol>
    </SkeletonTableRow>
  )
}

export function SkeletonMainSubscriptionsOrdersTable({
  visible = true,
}: Props): JSX.Element {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonTableTHead className="items-center py-8">
        <SkeletonCol className=" w-1/5">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/5">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/5">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/5">
          <SkeletonSpan size="small" />
        </SkeletonCol>
        <SkeletonCol className=" w-1/5">
          <SkeletonSpan size="small" />
        </SkeletonCol>
      </SkeletonTableTHead>
      <SkeletonMainSubscriptionsOrdersTableRow />
      <SkeletonMainSubscriptionsOrdersTableRow />
      <SkeletonMainSubscriptionsOrdersTableRow />
    </SkeletonWrapper>
  )
}
