import CustomerAddressContext from "context/CustomerAddressContext"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

import {
  EditButton,
  Wrapper,
  Customer,
  Address,
  ActionsWrapper,
  Actions,
  Text,
  Overlay,
  ConfirmActions,
  ConfirmCancel,
  ConfirmDelete,
  DeleteButton,
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
      {showDeleteConfirmation && (
        <Overlay>
          <Text>{t("addresses.deleteConfirmation")}</Text>
          <ConfirmActions>
            <ConfirmDelete type="delete" label={t("addresses.yes")} />
            <ConfirmCancel onClick={() => setShowDeleteConfirmation(false)}>
              {t("addresses.no")}
            </ConfirmCancel>
          </ConfirmActions>
        </Overlay>
      )}
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
        <Actions>
          <EditButton
            type="edit"
            variant="primary"
            label={editButton}
            onClick={(address) => {
              setAddress(address)
              setShowAddressForm(true)
            }}
          />

          <DeleteButton
            onClick={() => setShowDeleteConfirmation(true)}
            variant="warning"
            label={deleteButton}
          />
        </Actions>
      </ActionsWrapper>
    </Wrapper>
  )
}
