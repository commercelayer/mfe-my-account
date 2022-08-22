import { Transition } from "@headlessui/react"
import { DotsThreeVertical } from "phosphor-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import OutsideClickHandler from "react-outside-click-handler"

import { Wrapper, ActionsMenuWrapper } from "./styled"

interface ActionsMenuProps {
  className?: string
}

const actionMenuTransition = {
  enter: "transition duration-400 ease-out",
  enterFrom: "transform scale-95 opacity-0",
  enterTo: "transform scale-100 opacity-100",
  leave: "transition duration-300 ease-out",
  leaveFrom: "transform scale-100 opacity-100",
  leaveTo: "transform scale-95 opacity-0",
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ children, className }) => {
  const { t } = useTranslation()
  const [showActionsMenu, setShowActionsMenu] = useState(false)

  const handleClick = async () => {
    setShowActionsMenu(!showActionsMenu)
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowActionsMenu(false)
      }}
    >
      <Wrapper className={`${className} ${showActionsMenu && "z-10"}`}>
        <button
          type="button"
          onClick={handleClick}
          className={`flex items-center opacity-70 rounded-full hover:(text-gray-600 opacity-100) p-1 ${
            showActionsMenu ? "bg-gray-350 text-gray-600 opacity-100" : ""
          }`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span className="sr-only">{t("orders.openMenu")}</span>
          <DotsThreeVertical weight="bold" className="w-5 h-5" />
        </button>
        <Transition show={showActionsMenu} {...actionMenuTransition}>
          <ActionsMenuWrapper>{children}</ActionsMenuWrapper>
        </Transition>
      </Wrapper>
    </OutsideClickHandler>
  )
}

export default ActionsMenu
