import type { Address as CLayerAddress } from "@commercelayer/sdk"
import { Trash, X } from "phosphor-react"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "wouter"

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
  // ConfirmCancel,
  ConfirmDelete,
  DeleteButtonWrapper,
  DeleteButton,
} from "./styled"

import { GridCard } from "#components/ui/GridCard"
import { appRoutes } from "#data/routes"
import { AppContext } from "#providers/AppProvider"

interface Props {
  address?: CLayerAddress
  addressType: string
  readonly?: boolean
  editButton?: string
  deleteButton?: string
}

export function AddressCard({
  address,
  addressType,
  readonly,
  editButton,
  deleteButton,
}: Props): JSX.Element {
  const { t } = useTranslation()

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [, setLocation] = useLocation()
  const appCtx = useContext(AppContext)

  if (!address) return <></>
  const {
    first_name,
    last_name,
    line_1,
    line_2,
    zip_code,
    city,
    state_code,
    country_code,
    phone,
  } = address

  return (
    <Wrapper>
      {showDeleteConfirmation && (
        <Overlay>
          <X
            weight="regular"
            className="absolute w-5 h-5 text-gray-300 cursor-pointer right-2 top-2"
            onClick={() => setShowDeleteConfirmation(false)}
          />
          <Text>{t("addresses.deleteConfirmation")}</Text>
          <ConfirmActions>
            <ConfirmDelete
              type="delete"
              label={t("addresses.yes") as string}
              className="address-confirm-delete-button"
              onClick={() => {
                setShowDeleteConfirmation(false)
              }}
            />
          </ConfirmActions>
        </Overlay>
      )}
      <GridCard>
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
                className="address-edit-button"
                onClick={(address) => {
                  setLocation(
                    `${appRoutes.editAddress.makePath(
                      address?.id
                    )}?accessToken=${appCtx?.accessToken}`
                  )
                }}
              />
              <DeleteButtonWrapper
                onClick={() => setShowDeleteConfirmation(true)}
                className="address-delete-button"
              >
                <Trash className="w-3.5 h-3.5" />
                <DeleteButton
                  label={deleteButton || t("addresses.delete")}
                  variant="warning"
                />
              </DeleteButtonWrapper>
            </Actions>
          </ActionsWrapper>
        )}
      </GridCard>
    </Wrapper>
  )
}
