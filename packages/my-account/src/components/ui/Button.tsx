import cn from "classnames"

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

  
  return (
    <button 
      className={cn(
        'text-center font-semibold h-11 rounded-md shadow-sm disabled:opacity-50 hover:opacity-80 transition duration-500 ease-in-out', 
        {
          'px-5 h-6 text-3xs': p.buttonSize === "small",
          'px-7 h-11 text-ss': p.buttonSize !== "small",
          'text-gray-600 bg-gray-200 border border-gray-300': p.buttonStyle === "outline",
          'text-white bg-primary': p.buttonStyle !== "outline",
          'cursor-pointer': onClick !== undefined,
        }, 
        className
      )}
      onClick={handleClick} 
      {...p}
    >
      {label}
    </button>
  )
}

export default Button
