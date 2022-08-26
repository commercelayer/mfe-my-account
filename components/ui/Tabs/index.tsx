import { useContext, Children, ReactNode } from "react"

import { TabsContext } from "components/data/TabsProvider"

import {
  Wrapper,
  HeaderWrapper,
  TabHeader,
  ContentWrapper,
  TabContent,
} from "./styled"

type TabItemsProps = {
  index: number
  tabsCount?: number
}

export type TabHeaderProps = {
  isActive: boolean
  isFirst: boolean
  isLast: boolean
}

const TabsHeaderWrapper: React.FC = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>
}

const TabHeaderItem: React.FC<TabItemsProps> = ({
  children,
  index,
  tabsCount = 0,
}) => {
  const ctx = useContext(TabsContext)

  if (!ctx) return null

  const handleSelection = () => {
    return ctx.setTab(index)
  }

  return (
    <TabHeader
      data-tab-id={`tab_${index}`}
      className="group"
      onClick={handleSelection}
      isActive={ctx.activeTab === index}
      isFirst={index === 1}
      isLast={tabsCount > 0 && index === tabsCount}
    >
      {children}
    </TabHeader>
  )
}

const TabsContentWrapper: React.FC = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>
}

const TabContentItem: React.FC<TabItemsProps> = ({ children, index }) => {
  const ctx = useContext(TabsContext)
  if (!ctx) return null
  if (ctx.activeTab !== index) return null

  return (
    <TabContent data-tab-id={`tab_${index}`} className="group">
      {children}
    </TabContent>
  )
}

export const Tabs: React.FC = ({ children }) => {
  const arrayChildren = Children.toArray(children)

  return (
    <Wrapper>
      <TabsHeaderWrapper>
        {Children.map(arrayChildren, (tab, index) => {
          return (
            <TabHeaderItem
              key={index}
              index={index + 1}
              tabsCount={arrayChildren.length}
            >
              {tab?.props.title}
            </TabHeaderItem>
          )
        })}
      </TabsHeaderWrapper>
      <TabsContentWrapper>
        {Children.map(children, (tab, index) => {
          return (
            <TabContentItem key={index} index={index + 1}>
              {tab?.props.content}
            </TabContentItem>
          )
        })}
      </TabsContentWrapper>
    </Wrapper>
  )
}

export type TabProps = {
  title: string
  content: ReactNode
}

export const Tab: React.FC<TabProps> = () => {
  return null
}
