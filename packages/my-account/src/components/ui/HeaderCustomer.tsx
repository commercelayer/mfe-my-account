import type { Settings } from "HostedApp"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import Avatar from "#components/ui/Avatar"
import Logo from "#components/ui/Logo"
import MenuButton from "#components/ui/MenuButton"
import { AppContext } from "#providers/AppProvider"

type Props = Pick<Settings, "logoUrl" | "companyName">

function HeaderCustomer({ logoUrl, companyName }: Props): JSX.Element {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const email = ctx?.email as string

  return (
    <header className="fixed top-0 lg:relative w-full z-10 flex border-b-2 bg-white border-gray-300 mb-8 -mx-5 md:p-5 md:border-b lg:mb-16 lg:-mx-0 lg:px-0 lg:pt-0 lg:pb-0 lg:h-[50px] lg:items-center">
      <div className="flex flex-1 justify-between p-5 md:p-0">
        <MenuButton />
        <Logo
          logoUrl={logoUrl}
          companyName={companyName}
          className="self-center lg:hidden"
        />
        <h1 className="hidden text-xxl font-medium lg:inline">{t("header.title")}</h1>
        <div className="flex items-center">
          <p className="hidden text-sm text-gray-500 mr-3 font-medium lg:inline">{email}</p>
          <Avatar email={email} />
        </div>
      </div>
    </header>
  )
}

export default HeaderCustomer
