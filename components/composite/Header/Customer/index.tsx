import { Settings } from "HostedApp"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import {
  Wrapper,
  Title,
  HeaderContainer,
  User,
  Email,
} from "components/composite/Header/styled"
import { AppContext } from "components/data/AppProvider"
import Avatar from "components/ui/Avatar"
import Logo from "components/ui/Logo"
import MenuButton from "components/ui/MenuButton"

type Props = Pick<Settings, "logoUrl" | "companyName">

const CustomerHeader: React.FC<Props> = ({ logoUrl, companyName }) => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const email = ctx?.email as string

  return (
    <HeaderContainer>
      <Wrapper>
        <MenuButton />
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
      </Wrapper>
    </HeaderContainer>
  )
}

export default CustomerHeader
