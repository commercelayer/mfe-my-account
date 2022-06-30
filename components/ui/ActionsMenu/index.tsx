import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Transition } from "@headlessui/react"

import styled from "styled-components"
import tw from "twin.macro"

import ActionsMenuIcon from "components/ui/icons/ActionsMenuIcon"
import OutsideClickHandler from "react-outside-click-handler"
import { ActionsMenuContext } from "components/data/ActionsMenuProvider"

interface ActionsMenuProps {
  className?: string
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ children, className }) => {
  const { t } = useTranslation()
  const actionsMenuCtx = useContext(ActionsMenuContext)

  const handleClick = async () => {
    actionsMenuCtx?.toggleActionsMenu()
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => { actionsMenuCtx?.closeActionsMenu() }}
    >
      <Wrapper className={className}>
        <button
          type="button"
          onClick={handleClick}
          className={ `flex items-center opacity-70 rounded-full hover:(text-gray-600 opacity-100) p-1 ${actionsMenuCtx?.showActionsMenu ? 'bg-gray-350 text-gray-600 opacity-100' : ''}` }
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span className="sr-only">{t("orders.openMenu")}</span>
          <ActionsMenuIcon />
        </button>
        <Transition show={actionsMenuCtx?.showActionsMenu} {...actionMenuTransition}>
          <ActionsMenuWrapper>
            {children}
          </ActionsMenuWrapper>
        </Transition>
      </Wrapper>
    </OutsideClickHandler>
  ) 
}

export default ActionsMenu

const actionMenuTransition = {
  enter: "transition duration-400 ease-out",
  enterFrom: "transform scale-95 opacity-0",
  enterTo: "transform scale-100 opacity-100",
  leave: "transition duration-300 ease-out",
  leaveFrom: "transform scale-100 opacity-100",
  leaveTo: "transform scale-95 opacity-0"
}

export const Wrapper = styled.div`
  ${tw`relative flex justify-end z-10`}
`

export const ActionsMenuWrapper = styled.div`
  ${tw`absolute mt-2 top-[24px] right-0 bg-white overflow-hidden rounded-xl shadow w-[165px]`}
`