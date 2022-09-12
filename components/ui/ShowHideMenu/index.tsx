import { Transition } from "@headlessui/react"
import { CaretDown } from "phosphor-react"
import { useState } from "react"
import { Trans } from "react-i18next"
import OutsideClickHandler from "react-outside-click-handler"

import {
  ShowHideMenuWrapper,
  ShowHideMenuButton,
  ShowHideMenuButtonText,
  ShowHideMenuButtonIcon,
} from "./styled"

interface ShowHideMenuProps {
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

const ShowHideMenu: React.FC<ShowHideMenuProps> = ({
  children,
  itemsCounter,
}) => {
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
      <ShowHideMenuWrapper>
        <ShowHideMenuButton type="button" onClick={handleClick}>
          <ShowHideMenuButtonText>
            <Trans i18nKey={showHideMenuButtonTextLabel}>
              {itemsCounterToString}
            </Trans>
          </ShowHideMenuButtonText>
          <ShowHideMenuButtonIcon showHideMenu={showHideMenu}>
            <CaretDown weight="light" className="w-3 h-3" />
          </ShowHideMenuButtonIcon>
        </ShowHideMenuButton>
        <Transition show={showHideMenu} {...showHideMenuTransition}>
          {children}
        </Transition>
      </ShowHideMenuWrapper>
    </OutsideClickHandler>
  )
}

export default ShowHideMenu
