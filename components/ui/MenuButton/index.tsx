import { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import CloseIcon from "components/ui/icons/CloseIcon"
import MenuIcon from "components/ui/icons/MenuIcon"

import { AppContext } from "components/data/AppProvider"

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

export const Button = styled.button`
  ${tw`w-6 md:(hidden)`}
`
