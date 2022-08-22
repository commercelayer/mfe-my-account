import { List, X } from "phosphor-react"
import { useContext } from "react"

import { AppContext } from "components/data/AppProvider"

import { Button } from "./styled"

const MenuButton: React.FC = () => {
  const ctx = useContext(AppContext)

  const handlerOnClick = () => ctx?.toggleMobileMenu()

  return (
    <Button onClick={handlerOnClick}>
      {ctx?.showMobileMenu ? (
        <X weight="regular" className="w-5" />
      ) : (
        <List weight="regular" className="w-5" />
      )}
    </Button>
  )
}

export default MenuButton
