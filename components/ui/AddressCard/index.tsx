import { Address as CLayerAddress } from "@commercelayer/sdk"
import { Trash } from "phosphor-react"
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
  DeleteButtonWrapper,
  DeleteButton,
} from "./styled"

import CustomerAddressContext from "context/CustomerAddressContext"

interface Props {
  address?: CLayerAddress
  addressType: string
  readonly?: boolean
  editButton?: string
  deleteButton?: string
}

export const AddressCard: React.FC<Props> = ({
  address,
  addressType,
  readonly,
  editButton,
  deleteButton,
}) => {
  const { t } = useTranslation()

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const { setAddress, setShowAddressForm } = useContext(CustomerAddressContext)

  if (!address) return null
  const { first_name } = address
  const { last_name } = address
  const { line_1 } = address
  const { line_2 } = address
  const { zip_code } = address
  const { city } = address
  const { state_code } = address
  const { country_code } = address
  const { phone } = address

  return (
    <Wrapper>
      {showDeleteConfirmation && (
        <Overlay>
          <Text>{t("addresses.deleteConfirmation")}</Text>
          <ConfirmActions>
            <ConfirmDelete
              type="delete"
              label={t("addresses.yes")}
              onClick={() => {
                // TODO: Do we need to introduce a visual confirmation of address deletion?
                return false
              }}
            />
            <ConfirmCancel onClick={() => setShowDeleteConfirmation(false)}>
              {t("addresses.no")}
            </ConfirmCancel>
          </ConfirmActions>
        </Overlay>
      )}
      <Customer data-cy={`fullname_${addressType}`}>
        {first_name} {last_name}
      </Customer>
      <Address data-cy={`full_address_${addressType}`}>
        {line_2 != null ? [line_1, line_2].join(", ") : line_1}
        <br />
        {zip_code} {city} ({state_code}) - {country_code}
        <br />
        {phone}
        <br />
      </Address>
      {readonly === undefined && (
        <ActionsWrapper>
          <Actions>
            <EditButton
              type="edit"
              label={editButton || t("addresses.edit")}
              onClick={(address) => {
                setAddress(address)
                setShowAddressForm(true)
              }}
            />
            <DeleteButtonWrapper>
              <Trash className="w-3.5 h-3.5" />
              <DeleteButton
                label={deleteButton || t("addresses.delete")}
                onClick={() => setShowDeleteConfirmation(true)}
                variant="warning"
              />
            </DeleteButtonWrapper>
          </Actions>
        </ActionsWrapper>
      )}
    </Wrapper>
  )
}
