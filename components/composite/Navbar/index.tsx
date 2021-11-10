import { CustomerField } from "@commercelayer/react-components"
import { Dispatch } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import Footer from "components/ui/Footer"
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
  onClick?: Dispatch<boolean>
}

const Navbar: React.FC<Props> = ({ settings, onClick }) => {
  const { t } = useTranslation()
  const { accessToken, logoUrl, companyName } = settings

  const menu = {
    orders: {
      title: t("menu.orders"),
      href: "/orders",
      icon: <ShoppingCartIcon />,
      accessToken,
      onClick,
    },
    addresses: {
      title: t("menu.addresses"),
      href: "/addresses",
      icon: <LocationIcon />,
      accessToken,
      onClick,
    },
    wallet: {
      title: t("menu.wallet"),
      href: "/wallet",
      icon: <CreditCardIcon />,
      accessToken,
      onClick,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <ReturnsIcon />,
      accessToken,
      onClick,
    },
    customerService: {
      title: t("menu.customerService"),
      href: "/customer_service",
      icon: <CustomerServiceIcon />,
      accessToken,
      onClick,
    },
    logout: {
      title: t("menu.logout"),
      href: "/logout",
      icon: <LogoutIcon />,
      accessToken,
      onClick,
    },
  }

  return (
    <Sidebar data-cy="navbar">
      <Logo
        logoUrl={logoUrl}
        companyName={companyName}
        className="hidden md:block"
      />
      <Nav>
        <ul>
          <NavLink id="orders" {...menu.orders} />
          <NavLink id="addresses" {...menu.addresses} />
          <NavLink id="wallet" {...menu.wallet} />
          <NavLink id="returns" {...menu.returns} />
        </ul>
      </Nav>
      <Wrapper>
        <CustomerServiceWrapper>
          <NavLink id="customerService" {...menu.customerService} />
        </CustomerServiceWrapper>
        <EmailWrapper>
          {t("menu.loggedInAs")}
          <Email>
            <CustomerField name="email" />
          </Email>
        </EmailWrapper>
        <NavLink id="logout" {...menu.logout} />
      </Wrapper>
      <DesktopOnly>
        <Footer />
      </DesktopOnly>
    </Sidebar>
  )
}

export default Navbar

const Sidebar = styled.div`
  ${tw`flex flex-col min-h-full md:(p-5) lg:(pl-20 pr-10 pt-10) xl:(pl-48)`}
`

export const Wrapper = styled.div`
  ${tw`md:(mt-32 flex-1)`}
`

export const CustomerServiceWrapper = styled.div`
  ${tw`border-t border-b border-gray-300 py-1 mt-3 mb-8 xl:(border-none my-0)`}
`

export const EmailWrapper = styled.div`
  ${tw`text-sm mb-6 md:(hidden)`}
`

export const Email = styled.span`
  ${tw`block mt-0.5 font-bold`}
`
export const Nav = styled.nav`
  ${tw`md:(mt-8) lg:(mt-16)`}
`
const DesktopOnly = styled.div`
  ${tw`hidden md:(block)`}
`
