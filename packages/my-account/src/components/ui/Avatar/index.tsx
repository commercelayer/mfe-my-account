import { url } from "gravatar"

import { Image } from "./styled"

interface Props {
  email: string
  className?: string
}

function Avatar({ email, className }: Props): JSX.Element {
  const src = url(email, { s: "32", r: "g", d: "mp" }, true)
  return <Image src={src} className={className} />
}

export default Avatar
