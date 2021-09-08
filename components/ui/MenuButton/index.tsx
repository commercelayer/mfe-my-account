import { Dispatch } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import CloseIcon from "components/ui/icons/CloseIcon"
import MenuIcon from "components/ui/icons/MenuIcon"

interface Props {
  showMobileMenu: boolean
  setShowMobileMenu: Dispatch<boolean>
}

const MenuButton: React.FC<Props> = ({ showMobileMenu, setShowMobileMenu }) => {
  const handlerOnClick = () => setShowMobileMenu(!showMobileMenu)

  return (
    <Button onClick={handlerOnClick}>
      {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
    </Button>
  )
}

export default MenuButton

export const Button = styled.button`
  ${tw`w-6 xl:(hidden)`}
`
