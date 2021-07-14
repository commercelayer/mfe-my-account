import { CustomerInput } from "@commercelayer/react-components"
import { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { AppContext } from "components/data/AppProvider"
import SpinnerLoader from "components/ui/SpinnerLoader"

const Profile = () => {
  const ctx = useContext(AppContext)

  if (!ctx || ctx.isFirstLoading) {
    return <SpinnerLoader />
  }

  const { email } = ctx

  return (
    <>
      <h1>Profile Page</h1>
      <StyledCustomInput
        className="form-input"
        data-cy="customer_email"
        id="customer_email"
        errorClassName="hasError"
        tw="block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        placeholder="E-mail"
        saveOnBlur={true}
        value={email}
      />
      <StyledCustomInput
        className="form-input"
        data-cy="customer_password"
        id="customer_password"
        errorClassName="hasError"
        tw="block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        placeholder="*******************"
        saveOnBlur={true}
      />
    </>
  )
}

const StyledCustomInput = styled(CustomerInput)`
  ${tw`block w-full border-gray-400 border rounded-md p-3 transition duration-500 ease-in-out focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary-light focus:ring-opacity-50  sm:text-sm`}
`
export default Profile
