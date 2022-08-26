import {
  Wrapper,
  ItemWrapper,
  Item,
  ItemDotWrapper,
  ItemDot,
  ItemContent,
  ItemTitleWrapper,
  ItemSubTitleWrapper,
  ItemLine,
} from "./styled"

export type TimelineSteps = {
  title: string
  subTitle?: string
  completed?: boolean
}

export type TimelineProps = {
  steps: TimelineSteps[]
}

export const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <Wrapper>
      {steps.map((step, index) => {
        const { title, subTitle = "-", completed = false } = step
        const isFirst = index === 0
        const isLast = index === steps.length - 1
        const lastCompleted =
          completed === true &&
          steps[index + 1].completed === (false || undefined)

        return (
          <ItemWrapper completed={completed} key={index}>
            <Item>
              <ItemDotWrapper isFirst={isFirst} completed={completed}>
                <ItemDot completed={completed} />
              </ItemDotWrapper>
              <ItemContent
                isFirst={isFirst}
                isLast={isLast}
                completed={completed}
              >
                <ItemTitleWrapper>{title}</ItemTitleWrapper>
                <ItemSubTitleWrapper>{subTitle}</ItemSubTitleWrapper>
              </ItemContent>
            </Item>
            <ItemLine completed={completed} lastCompleted={lastCompleted} />
          </ItemWrapper>
        )
      })}
    </Wrapper>
  )
}

export default Timeline
