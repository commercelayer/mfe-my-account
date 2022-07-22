import { Settings } from "HostedApp"

import { Image, Label } from "./styled"

type LogoProps = Pick<Settings, "logoUrl" | "companyName"> & {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ logoUrl, companyName, className }) => {
  if (logoUrl) {
    return <Image src={logoUrl} alt={companyName} className={className} />
  }
  return <Label className={className}>{companyName}</Label>
}

export default Logo
