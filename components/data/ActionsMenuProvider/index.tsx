import { createContext, useState } from "react"

interface ActionsMenuProviderData {
  showActionsMenu: boolean,
  closeActionsMenu: () => void,
  toggleActionsMenu: () => void
}

export const ActionsMenuContext = createContext<ActionsMenuProviderData | null>(null)

export const ActionsMenuProvider: React.FC = ({
  children
}) => {
  const [showActionsMenu,  setShowActionsMenu] = useState(false)
  
  return (
    <ActionsMenuContext.Provider 
      value={{ 
        showActionsMenu,
        closeActionsMenu: () => {
          setShowActionsMenu(false)
        },
        toggleActionsMenu: () => {
          setShowActionsMenu(!showActionsMenu)
        }
      }} >
      {children}
    </ActionsMenuContext.Provider>
  )
}
