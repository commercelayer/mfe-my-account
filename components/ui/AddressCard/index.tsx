import CustomerAddressContext from "context/CustomerAddressContext"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

import {
  StyledActionLinkButton,
  StyledLinkButton,
  Wrapper,
  Customer,
  Address,
  ActionsWrapper,
  Actions,
  Text,
} from "./styled"

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
