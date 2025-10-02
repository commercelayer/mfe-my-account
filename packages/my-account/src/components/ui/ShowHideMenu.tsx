import { Transition } from "@headlessui/react"
import cn from "classnames"
import { CaretDown } from "phosphor-react"
import { useState } from "react"
import { Trans } from "react-i18next"
import OutsideClickHandler from "react-outside-click-handler"

interface Props {
  children: React.ReactNode
  itemsCounter: number
}

const showHideMenuTransition = {
  enter: "transition duration-400 ease-out",
  enterFrom: "transform opacity-0",
  enterTo: "transform opacity-100",
  leave: "transition duration-300 ease-out",
  leaveFrom: "transform opacity-100",
  leaveTo: "transform opacity-0",
}

function ShowHideMenu({ children, itemsCounter }: Props): JSX.Element {
  const [showHideMenu, setShowHideMenu] = useState(false)

  const handleClick = async () => {
    setShowHideMenu(!showHideMenu)
  }

  const itemsCounterToString = itemsCounter.toString()
  const showHideMenuButtonTextLabel =
    itemsCounter > 1
      ? "showHideMenu.mainLabel_plural"
      : "showHideMenu.mainLabel"

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        // setShowHideMenu(false)
      }}
    >
      <div>
        <button className="text-xs text-primary flex items-center mb-4" type="button" onClick={handleClick}>
          <span className="font-semibold border-b border-primary">
            <Trans i18nKey={showHideMenuButtonTextLabel}>
              {itemsCounterToString}
            </Trans>
          </span>
          <div className={cn('ml-1 transition duration-300', { 'rotate-180': showHideMenu })}>
            <CaretDown weight="light" className="w-3 h-3" />
          </div>
        </button>
        <Transition show={showHideMenu} {...showHideMenuTransition}>
          {children}
        </Transition>
      </div>
    </OutsideClickHandler>
  )
}

export default ShowHideMenu
