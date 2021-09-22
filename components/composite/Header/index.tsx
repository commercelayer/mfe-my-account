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
      <Wrapper>
        <MenuButton
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
        <Logo
          logoUrl={logoUrl}
          companyName={companyName}
          tw="self-center md:(hidden)"
        />
        <Title>{t("header.title")}</Title>
        <User>
          <Email>{email}</Email>
          <Avatar email={email} />
        </User>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header

export const HeaderContainer = styled.header`
  ${tw`flex border-b-2 bg-white border-gray-300 mb-8 -mx-5 md:(-mx-0 pb-2.5 border-b) lg:(mb-16)`}
`

export const Wrapper = styled.div`
  ${tw`flex flex-1 justify-between px-5 pb-5 md:(px-0 pb-0)`}
`
export const User = styled.div`
  ${tw`flex items-center`}
`

export const Title = styled.h1`
  ${tw`hidden text-xxl font-medium md:(inline)`}
`

export const Email = styled.p`
  ${tw`hidden text-sm text-gray-500 mr-3 font-medium lg:(inline)`}
`
