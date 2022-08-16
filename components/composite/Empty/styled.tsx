import styled from "styled-components"
import tw from "twin.macro"

import Button from "components/ui/Button"

export const Wrapper = styled.div`
  ${tw`flex flex-col items-center content-center`}
`

export const Title = styled.p`
  ${tw`text-sm md:text-lg font-semibold mt-8`}
`

export const Description = styled.p`
  ${tw`text-ss text-gray-500 mt-1`}
`

export const NoItemsButton = styled(Button)`
  ${tw`mt-8`}
`
