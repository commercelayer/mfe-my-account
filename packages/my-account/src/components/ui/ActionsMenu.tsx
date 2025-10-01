import { Transition } from "@headlessui/react"
import { DotsThreeVertical } from "phosphor-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import OutsideClickHandler from "react-outside-click-handler"

interface Props {
  children: React.ReactNode
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

function ActionsMenu({ children, className }: Props): JSX.Element {
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
      <div className={`relative flex justify-end ${showActionsMenu ? 'z-10' : ''} ${className ?? ''}`}>
        <button
          type="button"
          onClick={handleClick}
          className={`flex items-center opacity-70 rounded-full hover:text-gray-600 hover:opacity-100 p-1 ${showActionsMenu ? 'bg-gray-300 text-gray-600 opacity-100' : ''}`}
        >
          <span className="sr-only">{t("actionsMenu.mainLabel")}</span>
          <DotsThreeVertical weight="bold" className="w-5 h-5" />
        </button>
        <Transition show={showActionsMenu} {...actionMenuTransition}>
          <div className="absolute mt-2 top-[24px] right-0 bg-white overflow-hidden rounded-xl shadow w-[165px]">
            {children}
          </div>
        </Transition>
      </div>
    </OutsideClickHandler>
  )
}

export default ActionsMenu
