import { CustomerField } from "@commercelayer/react-components"
import { Settings } from "HostedApp"
import { useTranslation } from "react-i18next"

import NavLink from "components/composite/NavLink"
import CreditCardIcon from "components/ui/icons/CreditCardIcon"
import CustomerServiceIcon from "components/ui/icons/CustomerServiceIcon"
import LocationIcon from "components/ui/icons/LocationIcon"
import LogoutIcon from "components/ui/icons/LogoutIcon"
import ReturnsIcon from "components/ui/icons/ReturnsIcon"
import ShoppingCartIcon from "components/ui/icons/ShoppingCartIcon"
import Logo from "components/ui/Logo"

import {
  Wrapper,
  Sidebar,
  LogoWrapper,
  Nav,
  EmailWrapper,
  Email,
} from "./styled"

interface Props {
  settings: Settings
  onClick?: () => void
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
      <LogoWrapper>
        <Logo
          logoUrl={logoUrl}
          companyName={companyName}
          className="hidden md:block"
        />
      </LogoWrapper>
      <Nav>
        <ul>
          <NavLink id="orders" {...menu.orders} />
          <NavLink id="addresses" {...menu.addresses} />
          <NavLink id="wallet" {...menu.wallet} />
          <NavLink id="returns" {...menu.returns} />
        </ul>
      </Nav>
      <Wrapper>
        <NavLink id="customerService" {...menu.customerService} />
        <EmailWrapper>
          {t("menu.loggedInAs")}
          <Email>
            <CustomerField name="email" />
          </Email>
        </EmailWrapper>
        <NavLink id="logout" {...menu.logout} />
      </Wrapper>
    </Sidebar>
  )
}

export default Navbar
