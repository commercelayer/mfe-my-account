import Link from "next/link"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import Logo from "components/ui/Logo"

interface Props {
  settings: CustomerSettings
}

const Navbar: React.FC<Props> = ({ settings }) => {
  const { t } = useTranslation()
  const { accessToken, logoUrl, companyName } = settings

  return (
    <Menu data-cy="navbar">
      <Logo logoUrl={logoUrl} companyName={companyName} />
      <MainMenu>
        <MenuItem>
          <Link href={`/orders?accessToken=${accessToken}`}>
            {t("menu.orders")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`/addresses?accessToken=${accessToken}`}>
            {t("menu.addresses")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`/wallet?accessToken=${accessToken}`}>
            {t("menu.wallet")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`/returns?accessToken=${accessToken}`}>
            {t("menu.returns")}
          </Link>
        </MenuItem>
      </MainMenu>
      <SecondaryMenu>
        <MenuItem>
          <Link href={`#`}>{t("menu.customerService")}</Link>
        </MenuItem>
        <MenuItem>
          <Link href={`#`}>{t("menu.logout")}</Link>
        </MenuItem>
      </SecondaryMenu>
    </Menu>
  )
}

export default Navbar

export const Menu = styled.nav`
  ${tw`flex flex-col min-h-full pl-60`}
`

export const MainMenu = styled.ul`
  ${tw`pt-20 pb-52`}
`

export const SecondaryMenu = styled.ul`
  ${tw``}
`

export const MenuItem = styled.li`
  ${tw`text-base font-bold h-10 text-gray-500`}
`
