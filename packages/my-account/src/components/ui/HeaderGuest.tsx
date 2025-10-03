import type { Settings } from "HostedApp"

import Logo from "#components/ui/Logo"
import MenuButton from "#components/ui/MenuButton"

type Props = Pick<Settings, "logoUrl" | "companyName">

function HeaderGuest({ logoUrl, companyName }: Props): JSX.Element {
  return (
    <header className="fixed top-0 lg:relative w-full z-10 flex border-b-2 bg-white border-gray-300 mb-8 -mx-5 md:p-5 md:border-b lg:mb-16 lg:-mx-0 lg:px-0 lg:pt-0 lg:pb-0 lg:h-[50px] lg:items-center">
      <div className="flex flex-1 justify-between p-5 md:p-0">
        <MenuButton />
        <Logo
          logoUrl={logoUrl}
          companyName={companyName}
          className="self-center"
        />
      </div>
    </header>
  )
}

export default HeaderGuest
