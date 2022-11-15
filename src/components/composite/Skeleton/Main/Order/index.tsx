import { SkeletonMainPageTitle } from "src/components/composite/Skeleton/Main/Common"
import {
  SkeletonWrapper,
  SkeletonCol,
  SkeletonRow,
  SkeletonSubtitle,
  SkeletonSpan,
  SkeletonTableRow,
  SkeletonTableImg,
  SkeletonSpacer,
} from "src/components/composite/Skeleton/styled"

type Props = {
  shown?: boolean
}

const SkeletonMainOrderLineItem: React.FC = () => {
  return (
    <>
      <SkeletonTableRow align={"start"} className={"pt-3 lg:pt-6 pb-6 lg:pb-3"}>
        <SkeletonTableImg />
        <SkeletonCol className={"ml-4 lg:ml-8 w-full"}>
          <SkeletonSpan />
          <SkeletonRow className={"w-full justify-between"}>
            <SkeletonSubtitle size="medium" />
            <SkeletonSubtitle size={"small"} />
          </SkeletonRow>
          <SkeletonSubtitle size={"small"} />
        </SkeletonCol>
      </SkeletonTableRow>
      <SkeletonSpacer />
    </>
  )
}

const SkeletonMainOrderSubtotalsRow: React.FC = () => {
  return (
    <SkeletonTableRow className="items-center pl-[102px] lg:pl-[116px] h-[20px]">
      <SkeletonCol>
        <SkeletonSpan />
      </SkeletonCol>
      <SkeletonCol>
        <SkeletonSpan size={"small"} />
      </SkeletonCol>
    </SkeletonTableRow>
  )
}

export const SkeletonMainOrder: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonMainPageTitle
        className="pt-3 lg:pt-0"
        additionalContent={
          <>
            <SkeletonSpan className={"block mt-1"} />
            <SkeletonSpan size={"small"} className={"mt-4 block"} />
          </>
        }
      />
      <SkeletonRow className={"h-[60px] mt-14 mb-10 items-center"}>
        <SkeletonSubtitle size={"medium"} />
      </SkeletonRow>
      <SkeletonMainOrderLineItem />
      <SkeletonMainOrderLineItem />
      <SkeletonSpacer />
      <SkeletonMainOrderSubtotalsRow />
      <SkeletonMainOrderSubtotalsRow />
      <SkeletonMainOrderSubtotalsRow />
      <SkeletonSpacer />
      <SkeletonTableRow className="mt-6 pl-[102px] lg:pl-[116px]">
        <SkeletonCol>
          <SkeletonSubtitle
            size={"medium"}
            className="opacity-0 lg:opacity-100"
          />
        </SkeletonCol>
        <SkeletonCol>
          <SkeletonSubtitle size={"small"} />
        </SkeletonCol>
      </SkeletonTableRow>
    </SkeletonWrapper>
  )
}
