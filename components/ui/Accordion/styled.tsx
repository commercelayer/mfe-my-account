import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
  ${tw`-mx-10 md:-mx-0 md:border-t overflow-hidden`}
`
export const AccordionTab = styled.div`
  ${tw`outline-none bg-white shadow-bottom px-5 md:px-0 mb-6 md:mb-0 md:shadow-none md:border-b`}
`
export const AccordionTabHeader = styled.div`
  ${tw`text-black relative flex items-center justify-between cursor-pointer transition ease duration-500 focus:bg-gray-400`}
  .disabled & {
    ${tw`pointer-events-none`}
  }
`
export const AccordionTitle = styled.div`
  ${tw`transition ease duration-500 text-lg py-4`}
`
export const AccordionIcon = styled.div`
  ${tw`transform transition ease duration-500`}
  .active & {
    ${tw`-rotate-180`}
  }

  .disabled & {
    ${tw`text-gray-300`}
  }
`
export const AccordionBody = styled.div`
  ${tw`max-h-0 hidden`}
  .active & {
    ${tw`max-h-full block py-6 md:py-10 transition duration-200 ease-in`}
  }

  .disabled & {
    ${tw`max-h-0 hidden`}
  }
`
