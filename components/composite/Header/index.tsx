import { useContext } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { AppContext } from "components/data/AppProvider"
import Avatar from "components/ui/Avatar"

const Header: React.FC = () => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const email = ctx?.email as string

  return (
    <HeaderContainer>
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
  ${tw`flex pb-3 border-b place-content-between`}
`

export const Wrapper = styled.div`
  ${tw`flex`}
`

export const Title = styled.h1`
  ${tw`text-2xl font-bold invisible sm:(visible)`}
`

export const Email = styled.p`
  ${tw`text-sm text-gray-500 mr-3 font-semibold invisible sm:(visible)`}
`
