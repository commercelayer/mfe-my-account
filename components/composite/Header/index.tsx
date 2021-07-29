import { useContext, Dispatch } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { AppContext } from "components/data/AppProvider"
import Avatar from "components/ui/Avatar"
import Logo from "components/ui/Logo"
import MenuButton from "components/ui/MenuButton"

interface Props {
  logoUrl: string
  companyName: string
  showMobileMenu: boolean
  setShowMobileMenu: Dispatch<boolean>
}

const Header: React.FC<Props> = ({
  logoUrl,
  companyName,
  showMobileMenu,
  setShowMobileMenu,
}) => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const email = ctx?.email as string

  return (
    <HeaderContainer>
      <MenuButton
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        tw="ml-4"
      />
      <Logo
        logoUrl={logoUrl}
        companyName={companyName}
        tw="h-7 self-center xl:(hidden)"
      />
      <Title>{t("header.title")}</Title>
      <Wrapper>
        <Email>{email}</Email>
        <Avatar email={email} />
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header

export const HeaderContainer = styled.header`
  ${tw`flex py-5 border-b-2 bg-contrast place-content-between xl:(border-b)`}
`

export const Wrapper = styled.div`
  ${tw`flex items-center mr-4`}
`

export const Title = styled.h1`
  ${tw`hidden text-2xl font-semibold xl:(inline)`}
`

export const Email = styled.p`
  ${tw`hidden text-ss text-gray-500 mr-3 font-semibold xl:(inline)`}
`
