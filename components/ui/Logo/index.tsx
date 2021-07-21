import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  logoUrl: string
  companyName: string
  className?: string
}

const Logo: React.FC<Props> = ({ logoUrl, companyName, className }) => {
  return <Image src={logoUrl} alt={companyName} className={className} />
}

export default Logo

const Image = styled.img`
  ${tw`w-52 mt-12 -ml-4`}
`
