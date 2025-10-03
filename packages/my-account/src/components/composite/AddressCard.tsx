import { AddressField } from "@commercelayer/react-components/addresses/AddressField"
import type { Address as CLayerAddress } from "@commercelayer/sdk"
import { Trash, X } from "phosphor-react"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "wouter"

import { GridCard } from "#components/ui/GridCard"
import { LinkButton } from "#components/ui/LinkButton"
import { appRoutes } from "#data/routes"
import { AppContext } from "#providers/AppProvider"
import { useSettings } from "#providers/SettingsProvider"

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
  const { settings } = useSettings()

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
    <div className="relative transition duration-200 ease-in bg-white md:bg-transparent focus:shadow-sm">
      {showDeleteConfirmation && (
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full p-5 text-center bg-white border-2 border-red-400 rounded">
          <X
            weight="regular"
            className="absolute w-5 h-5 text-gray-300 cursor-pointer right-2 top-2"
            onClick={() => setShowDeleteConfirmation(false)}
          />
          <p className="text-sm font-bold">{t("addresses.deleteConfirmation")}</p>
          <div className="flex justify-center w-full mt-3 px-5">
            <AddressField
              type="delete"
              label={t("addresses.yes") as string}
              className="address-confirm-delete-button form-button px-5 h-6 text-3xs rounded-md bg-red-400 text-white flex items-center justify-center mx-0.5"
              onClick={() => {
                setShowDeleteConfirmation(false)
              }}
            />
          </div>
        </div>
      )}
      <GridCard hover={readonly ? "none" : undefined}>
        <p className="font-bold text-md" data-cy={`fullname_${addressType}`}>
          {first_name} {last_name}
        </p>
        <p className="text-[13px] text-gray-400 antialiased" data-cy={`full_address_${addressType}`}>
          {line_2 != null ? [line_1, line_2].join(", ") : line_1}
          <br />
          {zip_code} {city} ({state_code}) - {country_code}
          <br />
          {phone}
          <br />
        </p>
        {readonly === undefined && (
          <div className="flex flex-col justify-end pt-2">
            <div className="flex justify-between tracking-wide">
              <AddressField
                type="edit"
                label={editButton || t("addresses.edit")}
                className="address-edit-button form-button text-gray-400 group-hover:text-primary"
                onClick={(address) => {
                  setLocation(
                    appRoutes.editAddress.makePath({
                      addressId: address?.id || "",
                      accessToken: appCtx?.accessToken ?? '',
                      lang: settings.language,
                      returnUrl: settings.returnUrl
                    })
                  )
                }}
              />
              <div
                onClick={() => setShowDeleteConfirmation(true)}
                className="address-delete-button flex items-center gap-1 text-gray-400 group-hover:text-red-400"
              >
                <Trash className="w-3.5 h-3.5" />
                <LinkButton
                  className="form-button group-hover:text-red-400 bg-white"
                  label={deleteButton || t("addresses.delete")}
                  variant="warning"
                />
              </div>
            </div>
          </div>
        )}
      </GridCard>
    </div>
  )
}
