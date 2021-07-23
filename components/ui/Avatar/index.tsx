import gravatar from "gravatar"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  email: string
}

const Avatar: React.FC<Props> = ({ email }) => {
  const url = gravatar.url(email, { s: "32", r: "g", d: "mp" }, true)
  return <Image src={url} />
}

export default Avatar

const Image = styled.img`
  ${tw`rounded-full`}
`
