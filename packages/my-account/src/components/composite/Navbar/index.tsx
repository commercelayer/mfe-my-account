import { CustomerField } from "@commercelayer/react-components/customers/CustomerField"
import type { Settings } from "HostedApp"
import {
  Package,
  CreditCard,
  Lifebuoy,
  MapPin,
  ShoppingCart,
  CalendarCheck
} from "phosphor-react"
import { useTranslation } from "react-i18next"

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

import NavLink from "#components/composite/NavLink"
// import ShoppingCartIcon from "#components/ui/icons/ShoppingCartIcon"
import Footer from "#components/ui/Footer"
import Logo from "#components/ui/Logo"
import { appRoutes } from "#data/routes"

interface Props {
  settings: Settings
  onClick?: () => void
}

function Navbar({ settings, onClick }: Props): JSX.Element {
  const { t } = useTranslation()
  const { accessToken, logoUrl, companyName, language } = settings

  const menu = {
    orders: {
      title: t("menu.orders"),
      href: appRoutes.orders.makePath({
        accessToken: accessToken ?? "",
        lang: language,
      }),
      // icon: <ShoppingCartIcon />,
      icon: <ShoppingCart className="w-4" />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    addresses: {
      title: t("menu.addresses"),
      href: appRoutes.addresses.makePath({
        accessToken: accessToken ?? "",
        lang: language,
      }),
      icon: <MapPin className="w-4" />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    subscriptions: {
      title: t("menu.subscriptions"),
      href: appRoutes.subscriptions.makePath({
        accessToken: accessToken ?? "",
        lang: language,
      }),
      icon: <CalendarCheck className="w-4" />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    wallet: {
      title: t("menu.wallet"),
      href: appRoutes.wallet.makePath({
        accessToken: accessToken ?? "",
        lang: language,
      }),
      icon: <CreditCard className="w-4" />,
      comingSoon: false,
      accessToken,
      onClick,
    },
    returns: {
      title: t("menu.returns"),
      href: "/returns",
      icon: <Package className="w-4" />,
      comingSoon: true,
      hidden: true,
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
            <NavLink id="orders" {...menu.orders} />
            <NavLink id="addresses" {...menu.addresses} />
            <NavLink id="subscriptions" {...menu.subscriptions} />
            <NavLink id="wallet" {...menu.wallet} />
            <NavLink id="returns" {...menu.returns} />
          </Nav>
          {/* <NavLink id="customerService" {...menu.customerService} /> */}
          <EmailWrapper>
            {t("menu.loggedInAs")}
            <Email>
              <CustomerField name="email" attribute="email" tagElement="p" />
            </Email>
          </EmailWrapper>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </MenuWrapper>
      </Wrapper>
    </Sidebar>
  )
}

export default Navbar
