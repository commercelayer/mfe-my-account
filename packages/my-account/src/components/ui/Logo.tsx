import type { Settings } from "HostedApp"

type LogoProps = Pick<Settings, "logoUrl" | "companyName"> & {
  className?: string
}

function Logo({ logoUrl, companyName, className }: LogoProps): JSX.Element {
  if (logoUrl) {
    return <img src={logoUrl} alt={companyName} className={`max-h-8 max-w-full ${className ?? ''}`} />
  }
  return <h1 className={`font-extrabold uppercase tracking-wide text-xl text-black ${className ?? ''}`}>{companyName}</h1>
}

export default Logo
