interface Props {
  label?: string
  className?: string
  onClick?: () => void
  buttonSize?: "small"
  buttonStyle?: "outline"
}

function Button({
  label = "Click me",
  className = "",
  onClick,
  ...p
}: Props): JSX.Element {
  const handleClick = async () => {
    onClick && onClick()
  }

  const classNames = `text-center font-semibold h-11 rounded-md shadow-sm disabled:opacity-50 hover:opacity-80 transition duration-500 ease-in-out
  ${p.buttonSize === "small" ? `px-5 h-6 text-3xs` : `px-7 h-11 text-ss`}
  ${p.buttonStyle === "outline" ? `text-gray-600 bg-gray-200 border border-gray-300` : `text-white bg-primary`}
  ${onClick !== undefined && `cursor-pointer`}
  ${className ?? ''}
`

  return (
    <button className={classNames} onClick={handleClick} {...p}>
      {label}
    </button>
  )
}

export default Button
