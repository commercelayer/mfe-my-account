import { CustomerField } from "@commercelayer/react-components/customers/CustomerField"
import type { Settings } from "HostedApp"
import {
  Package,
  CreditCard,
  Lifebuoy,
  MapPin,
  ShoppingCart,
  CalendarCheck,
  SignOut,
  ArrowUUpLeft
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
import { revokeCustomerToken } from "#utils/revokeCustomerToken"

interface Props {
  settings: Settings
  onClick?: () => void
}

function Navbar({ settings, onClick }: Props): JSX.Element {
  const { t } = useTranslation()
  const { accessToken, logoUrl, companyName, language, returnUrl } = settings

  const menu = {
    orders: {
      title: t("menu.orders"),
      href: appRoutes.orders.makePath({
        accessToken: accessToken ?? "",
        lang: language,
        returnUrl,
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
        returnUrl
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
        returnUrl
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
        returnUrl
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
    backToShop: {
      title: t("menu.backToShop"),
      href: returnUrl ?? '#',
      icon: <ArrowUUpLeft className="w-4" />,
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
      href: '#',
      icon: <SignOut className="w-4" />,
      onClick: () => {
        revokeCustomerToken(accessToken ?? "").then(() => {
          if (returnUrl != null) {
            window.location.replace(returnUrl)
          }
        })
      }
    }
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
          <Nav>
            {returnUrl != null && (
              <NavLink id="backToShop" {...menu.backToShop} />
            )}
            {returnUrl != null && (
              <NavLink id="logout" {...menu.logout} />
            )}
          </Nav>
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
