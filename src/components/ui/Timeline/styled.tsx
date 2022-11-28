import styled from "styled-components"
import tw from "twin.macro"

interface TimelineItemProps {
  index?: number
  title?: string
  subTitle?: string
  completed?: boolean
  count?: number
}

interface ItemDotWrapperProps {
  isFirst?: boolean
  completed?: boolean
}

interface ItemDotProps {
  completed?: boolean
}

interface ItemLineProps {
  completed?: boolean
  lastCompleted?: boolean
}

interface ItemContentProps {
  isFirst?: boolean
  isLast?: boolean
  completed?: boolean
}

export const Wrapper = styled.div`
  ${tw`flex items-center mt-12 pb-12`}
`
export const ItemWrapper = styled.div<TimelineItemProps>`
  ${tw`flex items-center`}
  ${({ completed }) => completed && tw`flex-auto`}
`
export const Item = styled.div`
  ${tw`relative flex items-center text-black`}
`
export const ItemDotWrapper = styled.div<ItemDotWrapperProps>`
  ${tw`flex items-center justify-center rounded-full transition duration-500 ease-in-out w-4 h-4 border-2`}
  ${({ isFirst, completed }) => isFirst && completed && tw`bg-black`}
  ${({ completed }) => (completed ? tw`border-black` : tw`border-gray-300`)}
`
export const ItemDot = styled.div<ItemDotProps>`
  ${tw`w-2 h-2 rounded-full bg-black`}
  ${({ completed }) => !completed && tw`hidden`}
`
export const ItemContent = styled.div<ItemContentProps>`
  ${tw`absolute top-0 mt-6 text-xs font-medium`}
  ${({ isFirst, isLast }) => !isFirst && !isLast && tw`text-center -ml-8`}
  ${({ isFirst }) => isFirst && tw`text-left left-0`}
  ${({ isLast }) => isLast && tw`text-right right-0`}
`
export const ItemTitleWrapper = styled.div`
  ${tw`block text-xs font-bold text-gray-500`}
`
export const ItemSubTitleWrapper = styled.div`
  ${tw`block w-20 text-sm font-bold text-black`}
`
export const ItemLine = styled.div<ItemLineProps>`
  ${tw`flex-auto border-t-2 transition duration-500 ease-in-out hidden`}
  ${({ completed }) => completed && tw`flex`}
  ${({ completed, lastCompleted }) =>
    completed && !lastCompleted && tw`border-black`}
  ${({ completed, lastCompleted }) =>
    completed && lastCompleted && tw`border-gray-300 border-dashed`}
`
