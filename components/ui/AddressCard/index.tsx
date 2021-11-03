import { AddressField } from "@commercelayer/react-components"
import CustomerAddressContext from "context/CustomerAddressContext"
import { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import TrashIcon from "../icons/TrashIcon"
import { LinkButton } from "../LinkButton"

import { LinkButtonCss } from "components/ui/form/Button"

interface Props {
  firstName: string
  lastName: string
  city: string
  line1: string
  line2: string
  zipCode: string
  stateCode: string
  countryCode: string
  phone: string
  addressType: string
  editButton: string
  deleteButton: string
}

export const AddressCard: React.FC<Props> = ({
  firstName,
  lastName,
  city,
  line1,
  line2,
  zipCode,
  stateCode,
  countryCode,
  phone,
  addressType,
  editButton,
  deleteButton,
}) => {
  const { setAddress, setShowAddressForm } = useContext(CustomerAddressContext)

  return (
    <Wrapper>
      <Customer data-cy={`fullname_${addressType}`}>
        {firstName} {lastName}
      </Customer>
      <Address data-cy={`full_address_${addressType}`}>
        {[line1, line2].join(", ")}
        <br />
        {zipCode} {city} - {stateCode} ({countryCode})
        <br />
        {phone}
        <br />
      </Address>
      <Actions>
        <StyledLinkButton
          type="edit"
          label={editButton}
          onClick={(address) => {
            setAddress(address)
            setShowAddressForm(true)
          }}
        />
        <LinkButton label={deleteButton} variant="warning" />
      </Actions>
    </Wrapper>
  )
}

const StyledLinkButton = styled(AddressField)`
  ${LinkButtonCss}
`

const Wrapper = styled.div`
  ${tw`transition duration-500 ease-in px-5 pt-4 pb-2 border border-gray-350 rounded shadow-sm group-hover:(border-primary shadow-sm-primary)`}
`

const Customer = styled.p`
  ${tw`font-semibold text-md`}
`

const Address = styled.p`
  ${tw`text-ss font-thin text-gray-500 mb-3`}
`

const Actions = styled.div`
  ${tw`flex justify-between tracking-wide`}
`
