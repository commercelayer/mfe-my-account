import { createContext, useState, useEffect } from "react"

interface AccordionProviderConfig {
  isActive: boolean
  section: OrderSectionEnum
  setSection: () => void
  closeSection: () => void
}

export const AccordionContext = createContext<AccordionProviderConfig | null>(
  null
)

interface AccordionProviderProps {
  section: OrderSectionEnum
  activeSection: OrderSectionEnum
  setActiveSection?: (section: OrderSectionEnum) => void
}

export const AccordionProvider: React.FC<AccordionProviderProps> = ({
  children,
  section,
  activeSection,
  setActiveSection,
}) => {
  const [isActive, setIsActive] = useState(false)

  const setSection = () => {
    setActiveSection && setActiveSection(section)
  }

  const closeSection = () => {
    setActiveSection && setActiveSection("Summary")
  }

  useEffect(() => {
    setIsActive(section === activeSection)
  }, [activeSection])

  return (
    <AccordionContext.Provider
      value={{
        isActive,
        section,
        setSection,
        closeSection,
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}
