import styled from "styled-components"
import tw from "twin.macro"

type WrapperProps = {
  rounded?: boolean
  fullHeight?: boolean
  centered?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${tw`px-5 md:(p-15) xl:pr-48 2xl:pr-15 md:bg-white shadow-sm`}
  ${({ rounded }) => (rounded ? tw`rounded-md` : null)}
  ${({ fullHeight }) => (fullHeight ? tw`min-h-full ` : null)}
  ${({ centered }) => (centered ? null : tw` lg:pr-20 xl:pr-48 `)}
`
