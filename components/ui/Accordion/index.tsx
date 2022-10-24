import { CaretDown } from "phosphor-react"
import { useContext } from "react"

import { AccordionContext } from "components/data/AccordionProvider"
import { AppContext } from "components/data/AppProvider"

import {
  Wrapper,
  AccordionTab,
  AccordionTabHeader,
  AccordionIcon,
  AccordionTitle,
  AccordionBody,
} from "./styled"

type Props = {
  index: number
  header: React.ReactNode
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
      className={` ${ctx.isActive ? "active" : ""} `}
    >
      <AccordionTabHeader
        data-test-id={`accordion_${ctx.section.toLocaleLowerCase()}`}
        className="group"
        onClick={handleSelection}
      >
        <AccordionTitle>{header}</AccordionTitle>
        <AccordionIcon>
          <CaretDown weight="regular" className="w-5 md:w-6" />
        </AccordionIcon>
      </AccordionTabHeader>
      <AccordionBody>{children}</AccordionBody>
    </AccordionTab>
  )
}
