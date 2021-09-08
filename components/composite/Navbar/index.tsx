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
      accessToken,
    },
    addresses: {
      title: t("menu.addresses"),
      href: "/addresses",
      icon: <LocationIcon />,
      accessToken,
    },
    wallet: {
      title: t("menu.wallet"),
      href: "/wallet",
      icon: <CreditCardIcon />,
      accessToken,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <ReturnsIcon />,
      accessToken,
    },
    customerService: {
      title: t("menu.customerService"),
      href: "/customer_service",
      icon: <CustomerServiceIcon />,
      accessToken,
    },
    logout: {
      title: t("menu.logout"),
      href: "/logout",
      icon: <LogoutIcon />,
      accessToken,
    },
  }

  return (
    <Sidebar>
      <Menu data-cy="navbar">
        <Logo
          logoUrl={logoUrl}
          companyName={companyName}
          className="hidden xl:block"
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
    </Sidebar>
  )
}

export default Navbar

const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full p-5 lg:pl-20 lg:pr-10 lg:pt-10 xl:pl-48`}
`

export const Menu = styled.nav`
  ${tw``}
`

export const Wrapper = styled.div`
  ${tw`xl:(mt-32 self-end)`}
`

export const CustomerServiceWrapper = styled.div`
  ${tw`border-t border-b border-gray-300 py-1 mt-3 mb-8 xl:(border-none my-0)`}
`

export const EmailWrapper = styled.div`
  ${tw`text-sm pl-5 mb-6 xl:(hidden)`}
`

export const Email = styled.span`
  ${tw`block mt-0.5 font-bold`}
`
