import Link from "next/link"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import CreditCardIcon from "components/ui/icons/CreditCardIcon"
import CustomerServiceIcon from "components/ui/icons/CustomerServiceIcon"
import LocationIcon from "components/ui/icons/LocationIcon"
import LogoutIcon from "components/ui/icons/LogoutIcon"
import ReturnsIcon from "components/ui/icons/ReturnsIcon"
import ShoppingCartIcon from "components/ui/icons/ShoppingCartIcon"
import Logo from "components/ui/Logo"

import NavLink from "./NavLink"

interface Props {
  settings: CustomerSettings
}

const Navbar: React.FC<Props> = ({ settings }) => {
  const { t } = useTranslation()
  const { accessToken, logoUrl, companyName } = settings

  const menu = [
    { title: t("menu.orders"), path: "/orders", icon: <ShoppingCartIcon /> },
    { title: t("menu.addresses"), path: "/addresses", icon: <LocationIcon /> },
    { title: t("menu.wallet"), path: "/wallet", icon: <CreditCardIcon /> },
    { title: t("menu.returns"), path: "/returns", icon: <ReturnsIcon /> },
  ]

  return (
    <Menu data-cy="navbar">
      <Logo logoUrl={logoUrl} companyName={companyName} />
      <MainMenu>
        {menu.map((item, i) => {
          return (
            <NavLink
              href={item.path}
              accessToken={accessToken}
              icon={item.icon}
              key={i}
            >
              {item.title}
            </NavLink>
          )
        })}
      </MainMenu>
      <SecondaryMenu>
        <MenuItem>
          <CustomerServiceIcon />
          <Link href={`#`}>{t("menu.customerService")}</Link>
        </MenuItem>
        <MenuItem>
          <LogoutIcon />
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

export const MenuItem = styled.div`
  ${tw`flex text-base font-bold h-10 text-gray-500`}
`
