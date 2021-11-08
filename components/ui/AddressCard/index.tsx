import { AddressField } from "@commercelayer/react-components"
import CustomerAddressContext from "context/CustomerAddressContext"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { LinkButtonCss } from "components/ui/form/Button"
import { LinkButton } from "components/ui/LinkButton"

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
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const { setAddress, setShowAddressForm } = useContext(CustomerAddressContext)
  const { t } = useTranslation()

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
      <ActionsWrapper>
        {showDeleteConfirmation && (
          <Text>{t("addresses.deleteConfirmation")}</Text>
        )}
        <Actions>
          {showDeleteConfirmation ? (
            <>
              <StyledActionLinkButton
                type="delete"
                variant="warning"
                label={t("addresses.yes")}
              />
              <StyledLinkButton
                variant="default"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                {t("addresses.no")}
              </StyledLinkButton>
            </>
          ) : (
            <>
              <StyledActionLinkButton
                type="edit"
                variant="default"
                label={editButton}
                onClick={(address) => {
                  setAddress(address)
                  setShowAddressForm(true)
                }}
              />
              <StyledLinkButton
                onClick={() => setShowDeleteConfirmation(true)}
                variant="warning"
              >
                {deleteButton}
              </StyledLinkButton>
            </>
          )}
        </Actions>
      </ActionsWrapper>
    </Wrapper>
  )
}

interface StyledLinkButtonProps {
  variant?: string
}

const StyledActionLinkButton = styled(AddressField)<StyledLinkButtonProps>`
  ${LinkButtonCss}
  ${({ variant }) =>
    variant === "default"
      ? tw`group-hover:(text-primary)`
      : tw`group-hover:(text-red-400 border-red-100)`}
`

const StyledLinkButton = styled.button<StyledLinkButtonProps>`
  ${LinkButtonCss}
  ${({ variant }) =>
    variant === "default"
      ? tw`group-hover:(text-primary)`
      : tw`group-hover:(text-red-400 border-red-100)`}
`

const Wrapper = styled.div`
  ${tw`transition duration-500 ease-in h-36 px-5 pt-4 pb-2 border border-gray-350 rounded shadow-sm group-hover:(border-primary shadow-sm-primary)`}
`

const Customer = styled.p`
  ${tw`font-semibold text-md`}
`

const Address = styled.p`
  ${tw`text-ss font-thin text-gray-500`}
`

const ActionsWrapper = styled.div`
  ${tw`flex flex-col justify-end h-10`}
`

const Actions = styled.div`
  ${tw`flex justify-between tracking-wide`}
`

const Text = styled.p`
  ${tw`text-ss`}
`
