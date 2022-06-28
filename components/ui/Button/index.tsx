import styled from "styled-components"
import tw from "twin.macro"

type PrimaryButtonProps = {
  label?: string
  onClick?: () => void
  addressId?: string
}

const Button: React.FC<PrimaryButtonProps> = ( props ) => {
  const {
    label = 'Continue to delivery',
    onClick,
    ...p
  } = props

  const handleClick = async () => {
    onClick && onClick()
  }

  return (
    <PrimaryButton
      onClick={handleClick}
      {...p}
    >
      {label}
    </PrimaryButton>
    
  )
}

export default Button

const PrimaryButton = styled.button`
  ${tw`text-ss uppercase text-white bg-primary text-center px-12 h-11 rounded-md shadow-sm disabled:opacity-50 hover:opacity-80 transition duration-500 ease-in-out`}
`