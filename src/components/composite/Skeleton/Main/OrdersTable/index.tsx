import {
  SkeletonWrapper,
  SkeletonTableRow,
  SkeletonTableTHead,
  SkeletonCol,
  SkeletonSpan,
  SkeletonSubtitle,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

const SkeletonMainOrdersTableRow: React.FC = () => {
  return (
    <SkeletonTableRow className="relative items-center pb-12 h-[107px] lg:h-[96px] md:pb-0">
      <SkeletonCol className="order-1 w-1/4 pt-6 pb-2.5 md:p-0 md:align-middle">
        <SkeletonSpan size="small" />
        <SkeletonSpan size="small" />
      </SkeletonCol>
      <SkeletonCol className="absolute order-2 w-1/4 bottom-4 md:bottom-auto md:relative md:text-left">
        <SkeletonSpan size="small" />
      </SkeletonCol>
      <SkeletonCol className="absolute right-0 order-3 w-1/4 bottom-4 md:bottom-auto md:relative">
        <SkeletonSpan size="small" className="self-end md:self-auto" />
      </SkeletonCol>
      <SkeletonCol className="order-4 w-1/4 font-bold text-right md:text-left md:text-lg">
        <SkeletonSubtitle size="small" className="self-end md:self-auto" />
      </SkeletonCol>
    </SkeletonTableRow>
  )
}

export const SkeletonMainOrdersTable: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
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
      <SkeletonMainOrdersTableRow />
      <SkeletonMainOrdersTableRow />
      <SkeletonMainOrdersTableRow />
    </SkeletonWrapper>
  )
}
