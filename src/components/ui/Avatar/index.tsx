import { url } from "gravatar"

import { Image } from "./styled"

type Props = {
  email: string
  className?: string
}

const Avatar: React.FC<Props> = ({ email, className }) => {
  const src = url(email, { s: "32", r: "g", d: "mp" }, true)
  return <Image src={src} className={className} />
}

export default Avatar
