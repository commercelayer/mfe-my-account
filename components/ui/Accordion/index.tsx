import { ReactNode, useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { AccordionContext } from "components/data/AccordionProvider"
import { AppContext } from "components/data/AppProvider"

import CaretDownIcon from "components/ui/icons/CaretDownIcon"

interface Props {
  index: number
  header: ReactNode
}

export const Accordion: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export const AccordionItem: React.FC<Props> = ({ children, index, header }) => {
  const ctx = useContext(AccordionContext)
  const appCtx = useContext(AppContext)

  if (!ctx || !appCtx) return null

  const handleSelection = () => {
    return ctx.isActive ? ctx.closeSection() : ctx.setSection()
  }

  return (
    <AccordionTab
      tabIndex={index}
      className={` ${ctx.isActive ? 'active' : ''} `}
    >
      <AccordionTabHeader
        data-test-id={`accordion_${ctx.section.toLocaleLowerCase()}`}
        className="group"
        onClick={handleSelection}
      >
        <AccordionTitle>{header}</AccordionTitle>
        <AccordionIcon>
          <CaretDownIcon />
        </AccordionIcon>
      </AccordionTabHeader>
      <AccordionBody>{children}</AccordionBody>
    </AccordionTab>
  )
}

const Wrapper = styled.div`
  ${tw`-mx-10 md:-mx-0 md:border-t overflow-hidden`}
`
const AccordionTab = styled.div`
  ${tw`outline-none bg-white shadow-bottom px-5 md:px-0 mb-6 md:mb-0 md:shadow-none md:border-b`}
`
const AccordionTabHeader = styled.div`
  ${tw`text-black relative flex items-center justify-between cursor-pointer transition ease duration-500 focus:bg-gray-400`}
  .disabled & {
    ${tw`pointer-events-none`}
  }
`
const AccordionTitle = styled.div`
  ${tw`transition ease duration-500 text-lg py-4`}
`
const AccordionIcon = styled.div`
  ${tw`transform transition ease duration-500`}
  .active & {
    ${tw`-rotate-180`}
  }

  .disabled & {
    ${tw`text-gray-300`}
  }
`
const AccordionBody = styled.div`
  ${tw`max-h-0 transition duration-200 ease-in opacity-0`}
  .active & {
    ${tw`max-h-full opacity-100 py-6 md:py-12`}
  }

  .disabled & {
    ${tw`max-h-0 opacity-0`}
  }
`
