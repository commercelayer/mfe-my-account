import type { Settings } from "HostedApp"

import { Image, Label } from "./styled"

type LogoProps = Pick<Settings, "logoUrl" | "companyName"> & {
  className?: string
}

function Logo({ logoUrl, companyName, className }: LogoProps): JSX.Element {
  if (logoUrl) {
    return <Image src={logoUrl} alt={companyName} className={className} />
  }
  return <Label className={className}>{companyName}</Label>
}

export default Logo
