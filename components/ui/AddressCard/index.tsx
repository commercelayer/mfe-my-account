import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

import TrashIcon from "components/ui/icons/TrashIcon"

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
  DeleteButtonWrapper,
  DeleteButton,
} from "./styled"

import CustomerAddressContext from "context/CustomerAddressContext"

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
  showActions: boolean
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
  showActions,
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
        {line2 != null ? [line1, line2].join(", ") : line1}
        <br />
        {zipCode} {city} ({stateCode}) - {countryCode}
        <br />
        {phone}
        <br />
      </Address>
      {showActions && (
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
            <DeleteButtonWrapper>
              <TrashIcon />
              <DeleteButton
                onClick={() => setShowDeleteConfirmation(true)}
                variant="warning"
                label={deleteButton}
              />
            </DeleteButtonWrapper>
          </Actions>
        </ActionsWrapper>
      )}
    </Wrapper>
  )
}
