import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`mt-0 absolute top-0 transform translate-y-5 opacity-0`}
`

export const Grid = styled.div`
  ${tw`grid lg:(grid-cols-2 gap-4)`}
`

interface DiscardChanges {
  onClick: any
}

export const DiscardChanges = styled.div<DiscardChanges>`
  ${tw`flex w-max text-ss text-primary font-bold pb-10 hover:(cursor-pointer)`}
`

export const Text = styled.p`
  ${tw`ml-1.5 border-b border-green-600 border-opacity-10`}
`
