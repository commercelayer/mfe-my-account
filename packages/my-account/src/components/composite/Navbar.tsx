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
  const { accessToken, logoUrl, companyName, language, returnUrl, config } = settings
  const hideSubscriptions = config?.my_account?.hide_subscriptions ?? false

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
    <div className="flex flex-col min-h-full p-5 lg:p-15 sticky lg:top-8 xl:pl-48" data-cy="navbar">
      <div className="lg:sticky lg:top-8">
        <div className="w-full h-auto lg:h-[50px] lg:flex lg:items-center">
          <Logo
            logoUrl={logoUrl}
            companyName={companyName}
            className="hidden lg:block"
          />
        </div>
        <div className="mt-5 w-sidebar md:flex-1">
          <nav className="md:my-8 lg:my-16 flex flex-col gap-[18px]">
            <NavLink id="orders" {...menu.orders} />
            <NavLink id="addresses" {...menu.addresses} />
            {!hideSubscriptions && (
              <NavLink id="subscriptions" {...menu.subscriptions} />
            )}
            <NavLink id="wallet" {...menu.wallet} />
            <NavLink id="returns" {...menu.returns} />
          </nav>
          <nav className="md:my-8 lg:my-16 flex flex-col gap-[18px]">
            {returnUrl != null && (
              <NavLink id="backToShop" {...menu.backToShop} />
            )}
            {returnUrl != null && (
              <NavLink id="logout" {...menu.logout} />
            )}
          </nav>
          <div className="my-6 lg:hidden text-xs text-gray-500">
            {t("menu.loggedInAs")}
            <span className="block mt-0.5 font-bold text-black">
              <CustomerField name="email" attribute="email" tagElement="p" />
            </span>
          </div>
          <div className="hidden lg:block">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
