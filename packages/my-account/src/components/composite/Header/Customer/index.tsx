import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import {
  Wrapper,
  Title,
  HeaderContainer,
  User,
  Email,
} from "#components/composite/Header/styled"
import Avatar from "#components/ui/Avatar"
import Logo from "#components/ui/Logo"
import MenuButton from "#components/ui/MenuButton"
import { AppContext } from "#providers/AppProvider"

type Props = Pick<Settings, "logoUrl" | "companyName">

function CustomerHeader({ logoUrl, companyName }: Props): JSX.Element {
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
