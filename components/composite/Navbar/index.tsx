import { useContext } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { AppContext } from "components/data/AppProvider"
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
  const ctx = useContext(AppContext)
  const email = ctx?.email as string

  const menu = {
    orders: {
      title: t("menu.orders"),
      href: "/orders",
      icon: <ShoppingCartIcon />,
      accessToken: accessToken,
    },
    addresses: {
      title: t("menu.addresses"),
      href: "/addresses",
      icon: <LocationIcon />,
      accessToken: accessToken,
    },
    wallet: {
      title: t("menu.wallet"),
      href: "/wallet",
      icon: <CreditCardIcon />,
      accessToken: accessToken,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <ReturnsIcon />,
      accessToken: accessToken,
    },
    customerService: {
      title: t("menu.customerService"),
      href: "/customer_service",
      icon: <CustomerServiceIcon />,
      accessToken: accessToken,
    },
    logout: {
      title: t("menu.logout"),
      href: "/logout",
      icon: <LogoutIcon />,
      accessToken: accessToken,
    },
  }

  return (
    <Menu data-cy="navbar">
      <Logo
        logoUrl={logoUrl}
        companyName={companyName}
        tw="hidden xl:(inline pl-64 pr-4 w-auto h-8 mb-16)"
      />
      <NavLink id="orders" {...menu.orders} />
      <NavLink id="addresses" {...menu.addresses} />
      <NavLink id="wallet" {...menu.wallet} />
      <NavLink id="returns" {...menu.returns} />
      <Wrapper>
        <CustomerServiceWrapper>
          <NavLink id="customerService" {...menu.customerService} />
        </CustomerServiceWrapper>
        <EmailWrapper>
          {t("menu.loggedInAs")}
          <Email>{email}</Email>
        </EmailWrapper>
        <NavLink id="logout" {...menu.logout} />
      </Wrapper>
    </Menu>
  )
}

export default Navbar

export const Menu = styled.nav`
  ${tw`flex flex-col min-h-screen text-gray-500 bg-white xl:(bg-gray-100)`}
`

export const Wrapper = styled.div`
  ${tw`xl:(mt-32)`}
`

export const CustomerServiceWrapper = styled.div`
  ${tw`border-t border-b py-1 mt-3 mb-8 xl:(border-none my-0)`}
`

export const EmailWrapper = styled.div`
  ${tw`text-sm pl-5 mb-6 xl:(hidden)`}
`

export const Email = styled.span`
  ${tw`block mt-0.5 font-bold`}
`
