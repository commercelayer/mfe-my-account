import styled from "styled-components"
import tw from "twin.macro"

type PrimaryButtonProps = {
  label?: string
  onClick?: () => void
  buttonSize?: string
  buttonStyle?: string
}

const Button: React.FC<PrimaryButtonProps> = ( props ) => {
  const {
    label = 'Click me',
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

const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${tw` uppercase text-center h-11 rounded-md shadow-sm disabled:opacity-50 hover:opacity-80 transition duration-500 ease-in-out`}
  ${({ buttonSize }) => (buttonSize == 'small' ? tw`px-5 h-5 text-3xs` : tw`px-12 h-11 text-ss`)}
  ${({ buttonStyle }) => (buttonStyle == 'outline' ? tw`text-gray-600 bg-gray-200 border border-gray-350` : tw`text-white bg-primary`)}
`