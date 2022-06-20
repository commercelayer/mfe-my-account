import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  className?: string
  rounded?: boolean
  fullHeight?: boolean
}

export const Card: React.FC<Props> = ({
  children,
  className,
  rounded,
  fullHeight,
}) => (
  <Wrapper className={className} rounded={rounded} fullHeight={fullHeight}>
    {children}
  </Wrapper>
)

interface WrapperProps {
  rounded?: boolean
  fullHeight?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  ${tw`flex flex-col min-h-full p-5 pt-0 md:p-5 lg:p-10 lg:pr-20 xl:pr-48 bg-gray-100 bg-gray-100 md:bg-white shadow-sm`}
  ${({ rounded }) => (rounded ? tw`rounded-md` : null)}
  ${({ fullHeight }) => (fullHeight ? tw`min-h-full ` : null)}
`
