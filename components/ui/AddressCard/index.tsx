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
        {address?.first_name} {address?.last_name}
      </Customer>
      <Address data-cy={`full_address_${addressType}`}>
        {address?.line_2 != null
          ? [address?.line_1, address?.line_2].join(", ")
          : address?.line_1}
        <br />
        {address?.zip_code} {address?.city} ({address?.state_code}) -{" "}
        {address?.country_code}
        <br />
        {address?.phone}
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
