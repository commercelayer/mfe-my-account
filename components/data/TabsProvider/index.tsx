import { createContext, useState } from "react"

interface TabsProviderData {
  activeTab: number
  setTab: (tabIndex: number) => void
}

export const TabsContext = createContext<TabsProviderData | null>(null)

type TabsProviderProps = {
  tabsRel: string
}

export const TabsProvider: React.FC<TabsProviderProps> = ({
  children,
  tabsRel,
}) => {
  const [activeTabByRel, setActiveTabByRel] = useState([
    { tab: tabsRel, activeTab: 1 },
  ])

  const setTab = (tabIndex: number) => {
    const newActiveTabByRel = [...activeTabByRel]
    const index = newActiveTabByRel.findIndex(
      (tabByRel) => tabByRel.tab === tabsRel
    )
    if (index > -1) {
      newActiveTabByRel[index] = { tab: tabsRel, activeTab: tabIndex }
    } else {
      newActiveTabByRel.push({ tab: tabsRel, activeTab: tabIndex })
    }
    setActiveTabByRel(newActiveTabByRel)
  }

  const activeTab = activeTabByRel.find((tabByRel) => tabByRel.tab === tabsRel)
    ?.activeTab as number

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  )
}
