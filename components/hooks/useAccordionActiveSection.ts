import { useState, useContext } from "react"

import { AppContext } from "components/data/AppProvider"

type UseAccordionActiveSection = {
  activeSection: OrderSectionEnum
  setActiveSection: (section: OrderSectionEnum) => void
  isLoading: boolean
  sections: OrderSectionEnum[]
}

const SECTIONS: OrderSectionEnum[] = [
  "Summary",
  "Addresses",
  "Shipments",
  "Payments",
]

export const useAccordionActiveSection = (): UseAccordionActiveSection => {
  const [activeSection, setActiveSection] =
    useState<OrderSectionEnum>("Summary")
  const [sections] = useState<OrderSectionEnum[]>(SECTIONS)

  const ctx = useContext(AppContext)

  if (!ctx)
    return {
      activeSection,
      setActiveSection,
      isLoading: true,
      sections,
    }

  const { isLoading } = ctx

  return {
    activeSection,
    setActiveSection,
    isLoading,
    sections,
  }
}
