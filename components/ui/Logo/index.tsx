interface Props {
  logoUrl: string
  companyName: string
  className?: string
}

const Logo: React.FC<Props> = ({ logoUrl, companyName, className }) => {
  return <img src={logoUrl} alt={companyName} className={className} />
}

export default Logo
