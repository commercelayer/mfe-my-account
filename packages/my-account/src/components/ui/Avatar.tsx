import { url } from "gravatar"

interface Props {
  email: string
  className?: string
}

function Avatar({ email, className }: Props): JSX.Element {
  const src = url(email, { s: "32", r: "g", d: "mp" }, true)
  return <img src={src} className={`rounded-full ${className ?? ''}`} />
}

export default Avatar
