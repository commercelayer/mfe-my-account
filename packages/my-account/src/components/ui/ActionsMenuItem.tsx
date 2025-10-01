interface LabelProps {
  icon: React.ReactNode | null | undefined
  variant?: string
}

interface Props {
  label?: string
  icon?: React.ReactNode
  disabled?: boolean | false
  variant?: string
  onClick?: () => void
}

function ActionsMenuItem(props: Props): JSX.Element {
  const {
    label = "Menu item",
    icon = undefined,
    disabled = false,
    variant = "default",
    onClick,
  } = props

  const handleClick = async () => {
    !disabled && onClick && onClick()
  }

  return (
    <div className="flex items-center px-2 py-4 bg-white hover:bg-gray-200 cursor-default" onClick={handleClick}>
      {icon && <div className="flex items-center px-2">{icon}</div>}
      <p className={`text-[12px] select-none ${variant === 'warning' ? 'text-red-400' : ''} ${icon == null ? 'ml-7' : ''}`}>
        {label}
      </p>
    </div>
  )
}

export default ActionsMenuItem
