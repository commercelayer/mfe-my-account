import { CustomerField } from "@commercelayer/react-components"
import type { Settings } from "HostedApp"
import {
  Package,
  CreditCard,
  Lifebuoy,
  MapPin,
  ShoppingCart,
  SignOut,
} from "phosphor-react"
import { useTranslation } from "react-i18next"

import NavLink from "src/components/composite/NavLink"
// import ShoppingCartIcon from "src/components/ui/icons/ShoppingCartIcon"
import Footer from "src/components/ui/Footer"
import Logo from "src/components/ui/Logo"

import {
  Wrapper,
  Sidebar,
  MenuWrapper,
  LogoWrapper,
  FooterWrapper,
  Nav,
  EmailWrapper,
  Email,
} from "./styled"

type Props = {
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
      icon: <ShoppingCart className="w-4" />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    addresses: {
      title: t("menu.addresses"),
      href: "/addresses",
      icon: <MapPin className="w-4" />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    wallet: {
      title: t("menu.wallet"),
      href: "/wallet",
      icon: <CreditCard className="w-4" />,
      comingSoon: true,
      accessToken,
      onClick,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <Package className="w-4" />,
      comingSoon: true,
      accessToken,
      onClick,
    },
    customerService: {
      title: t("menu.customerService"),
      href: "/customer_service",
      icon: <Lifebuoy className="w-4" />,
      accessToken,
      onClick,
    },
    logout: {
      title: t("menu.logout"),
      href: "/logout",
      icon: <SignOut className="w-4" />,
      accessToken,
      onClick,
    },
  }

  return (
    <Sidebar data-cy="navbar">
      <Wrapper>
        <LogoWrapper>
          <Logo
            logoUrl={logoUrl}
            companyName={companyName}
            className="hidden lg:block"
          />
        </LogoWrapper>
        <MenuWrapper>
          <Nav>
            <ul className="flex flex-col gap-[18px]">
              <NavLink id="orders" {...menu.orders} />
              <NavLink id="addresses" {...menu.addresses} />
              <NavLink id="wallet" {...menu.wallet} />
              <NavLink id="returns" {...menu.returns} />
            </ul>
          </Nav>
          {/* <NavLink id="customerService" {...menu.customerService} /> */}
          <EmailWrapper>
            {t("menu.loggedInAs")}
            <Email>
              <CustomerField name="email" attribute="email" tagElement="p" />
            </Email>
          </EmailWrapper>
          <NavLink id="logout" {...menu.logout} />
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </MenuWrapper>
      </Wrapper>
    </Sidebar>
  )
}

export default Navbar
