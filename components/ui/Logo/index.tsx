import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  logoUrl?: string
  companyName: string
  className?: string
}

const Logo: React.FC<Props> = ({ logoUrl, companyName, className }) => {
  if (logoUrl) {
    return <Image src={logoUrl} alt={companyName} className={className} />
  }
  return <Label className={className}>{companyName}</Label>
}

export default Logo

const Image = styled.img`
  ${tw`max-h-10 max-w-full md:max-h-12`}
`

const Label = styled.h1`
  ${tw`mb-5 md:mb-12 font-extrabold uppercase tracking-wide text-xl text-black`}
`