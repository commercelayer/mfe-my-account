import { Settings } from "HostedApp"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import { AppContext } from "components/data/AppProvider"
import Avatar from "components/ui/Avatar"
import Logo from "components/ui/Logo"
import MenuButton from "components/ui/MenuButton"

import { Wrapper, Title, HeaderContainer, User, Email } from "./styled"

type Props = Pick<Settings, "isGuest" | "logoUrl" | "companyName">

const Header: React.FC<Props> = ({ isGuest, logoUrl, companyName }) => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const email = ctx?.email as string

  return (
    <HeaderContainer>
      <Wrapper>
        <MenuButton />
        {isGuest ? (
          <>
            <Logo
              logoUrl={logoUrl}
              companyName={companyName}
              className="self-center"
            />
          </>
        ) : (
          <>
            <Logo
              logoUrl={logoUrl}
              companyName={companyName}
              className="self-center md:hidden"
            />
            <Title>{t("header.title")}</Title>
            <User>
              <Email>{email}</Email>
              <Avatar email={email} />
            </User>
          </>
        )}
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
