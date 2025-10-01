import { List, X } from "phosphor-react"
import { useContext } from "react"

import { AppContext } from "#providers/AppProvider"

function MenuButton(): JSX.Element {
  const ctx = useContext(AppContext)

  const handlerOnClick = () => ctx?.toggleMobileMenu()

  return (
    <button className="w-6 lg:hidden" onClick={handlerOnClick}>
      {ctx?.showMobileMenu ? (
        <X weight="regular" className="w-5" />
      ) : (
        <List weight="regular" className="w-5" />
      )}
    </button>
  )
}

export default MenuButton
