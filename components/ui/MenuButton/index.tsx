import { useContext } from "react"

import { AppContext } from "components/data/AppProvider"
import CloseIcon from "components/ui/icons/CloseIcon"
import MenuIcon from "components/ui/icons/MenuIcon"

import { Button } from "./styled"

const MenuButton: React.FC = () => {
  const ctx = useContext(AppContext)

  const handlerOnClick = () => ctx?.toggleMobileMenu()

  return (
    <Button onClick={handlerOnClick}>
      {ctx?.showMobileMenu ? <CloseIcon /> : <MenuIcon />}
    </Button>
  )
}

export default MenuButton
