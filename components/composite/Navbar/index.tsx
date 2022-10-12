import { CustomerField } from "@commercelayer/react-components"
import { Settings } from "HostedApp"
import {
  ArrowBendUpLeft,
  CreditCard,
  Lifebuoy,
  MapPin,
  ShoppingCart,
  SignOut,
} from "phosphor-react"
import { useTranslation } from "react-i18next"

import NavLink from "components/composite/NavLink"
// import ShoppingCartIcon from "components/ui/icons/ShoppingCartIcon"
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
      // icon: <ShoppingCartIcon />,
      icon: <ShoppingCart className="w-4 md:w-5" />,
      accessToken,
      onClick,
    },
    addresses: {
      title: t("menu.addresses"),
      href: "/addresses",
      icon: <MapPin className="w-4 md:w-5" />,
      accessToken,
      onClick,
    },
    wallet: {
      title: t("menu.wallet"),
      href: "/wallet",
      icon: <CreditCard className="w-4 md:w-5" />,
      accessToken,
      onClick,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <ArrowBendUpLeft className="w-4 md:w-5" />,
      accessToken,
      onClick,
    },
    customerService: {
      title: t("menu.customerService"),
      href: "/customer_service",
      icon: <Lifebuoy className="w-4 md:w-5" />,
      accessToken,
      onClick,
    },
    logout: {
      title: t("menu.logout"),
      href: "/logout",
      icon: <SignOut className="w-4 md:w-5" />,
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
          {/* <NavLink id="wallet" {...menu.wallet} />
          <NavLink id="returns" {...menu.returns} /> */}
        </ul>
      </Nav>
      <Wrapper>
        {/* <NavLink id="customerService" {...menu.customerService} /> */}
        <EmailWrapper>
          {t("menu.loggedInAs")}
          <Email>
            <CustomerField name="email" attribute="email" tagElement="p" />
          </Email>
        </EmailWrapper>
        <NavLink id="logout" {...menu.logout} />
      </Wrapper>
    </Sidebar>
  )
}

export default Navbar
