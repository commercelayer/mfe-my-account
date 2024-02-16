import styled from "styled-components"
import tw from "twin.macro"

interface WrapperProps {
  noBorder?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${tw`-mx-10 md:-mx-0 md:border-t overflow-hidden`}
  ${({ noBorder }) => (noBorder === true ? tw`md:border-none` : "md:border-t")}
`
export const OrderSectionTab = styled.div`
  ${tw`outline-none bg-white shadow-bottom px-5 md:px-0 mb-6 md:mb-0 md:shadow-none md:border-b last:border-none`}
`
export const OrderSectionTabHeader = styled.div`
  ${tw`text-black relative flex items-center justify-between transition ease duration-500 focus:bg-gray-400`}
  .disabled & {
    ${tw`pointer-events-none`}
  }
`
export const OrderSectionTitle = styled.div`
  ${tw`transition ease duration-500 text-lg mt-12`}
`
export const OrderSectionBody = styled.div`
  ${tw`max-h-0 hidden`}
  .active & {
    ${tw`max-h-full block py-6 md:py-10 transition duration-200 ease-in`}
  }

  .disabled & {
    ${tw`max-h-0 hidden`}
  }
`
