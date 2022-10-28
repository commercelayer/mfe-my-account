import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import {
  Wrapper,
  Title,
  HeaderContainer,
  User,
  Email,
} from "src/components/composite/Header/styled"
import Avatar from "src/components/ui/Avatar"
import Logo from "src/components/ui/Logo"
import MenuButton from "src/components/ui/MenuButton"

import { AppContext } from "src/providers/AppProvider"

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
          className="self-center lg:hidden"
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
