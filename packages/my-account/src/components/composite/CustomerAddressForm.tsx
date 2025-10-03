import BillingAddressForm from "@commercelayer/react-components/addresses/BillingAddressForm"
import { SaveAddressesButton } from "@commercelayer/react-components/addresses/SaveAddressesButton"
import { XCircle } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useRoute } from "wouter"

import { AddressInputGroup } from "#components/composite/AddressInputGroup"
import Title from "#components/ui/Title"
import Text from "#components/ui/Text"
import { appRoutes } from "#data/routes"
import { AppContext } from "#providers/AppProvider"
import { CustomerAddressContext } from "#providers/CustomerAddressProvider"
import { useSettings } from "#providers/SettingsProvider"

function CustomerAddressForm(): JSX.Element | null {
  const appCtx = useContext(AppContext)
  const ctx = useContext(CustomerAddressContext)
  const { settings } = useSettings()
  const { t } = useTranslation()
  const [, setLocation] = useLocation()
  const address = ctx?.address
  const [, params] = useRoute<{ addressId: string }>(appRoutes.editAddress.path)
  const addressId = params == null ? undefined : params.addressId

  return address === undefined && addressId !== undefined ? null : (
    <BillingAddressForm errorClassName="hasError">
      <Title>
        {addressId === undefined
          ? t("addresses.addressForm.new_address_title")
          : t("addresses.addressForm.edit_address_title")}
      </Title>
      <div className="grid lg:grid-cols-2 lg:gap-4">
        <AddressInputGroup
          fieldName="billing_address_first_name"
          resource="billing_address"
          type="text"
          value={address?.first_name || ""}
        />
        <AddressInputGroup
          fieldName="billing_address_last_name"
          resource="billing_address"
          type="text"
          value={address?.last_name || ""}
        />
      </div>
      <AddressInputGroup
        fieldName="billing_address_line_1"
        resource="billing_address"
        type="text"
        value={address?.line_1 || ""}
      />
      <AddressInputGroup
        required={false}
        fieldName="billing_address_line_2"
        resource="billing_address"
        type="text"
        value={address?.line_2 || ""}
      />
      <div className="grid lg:grid-cols-2 lg:gap-4">
        <AddressInputGroup
          fieldName="billing_address_city"
          resource="billing_address"
          type="text"
          value={address?.city || ""}
        />
        <AddressInputGroup
          fieldName="billing_address_country_code"
          resource="billing_address"
          type="text"
          value={address?.country_code || ""}
        />
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-4">
        <AddressInputGroup
          fieldName="billing_address_state_code"
          resource="billing_address"
          type="text"
          value={address?.state_code || ""}
        />
        <AddressInputGroup
          fieldName="billing_address_zip_code"
          resource="billing_address"
          type="text"
          value={address?.zip_code || ""}
        />
      </div>
      <AddressInputGroup
        fieldName="billing_address_phone"
        resource="billing_address"
        type="tel"
        value={address?.phone || ""}
      />
      <AddressInputGroup
        required={false}
        fieldName="billing_address_billing_info"
        resource="billing_address"
        type="text"
        value={address?.billing_info || ""}
      />
      <div className="flex justify-between items-center pb-10">
        <div className="flex content-center items-center text-ss text-primary underline border-red-400 font-bold hover:cursor-pointer"
          onClick={() => {
            setLocation(
              `${appRoutes.addresses.makePath({
                accessToken: appCtx?.accessToken ?? '',
                lang: settings.language,
                returnUrl: settings.returnUrl
              })}`
            )
          }}
        >
          <XCircle className="w-4 h-4" />
          <Text>{t("addresses.addressForm.discard_changes")}</Text>
        </div>
        <SaveAddressesButton
          className="text-ss font-bold text-white bg-primary text-center px-16 lg:px-20 h-11 rounded-md shadow-sm disabled:opacity-50 max-w-1/2"
          data-test-id="save-address"
          label={t("addresses.addressForm.save")}
          onClick={() => {
            setLocation(
              `${appRoutes.addresses.makePath({
                accessToken: appCtx?.accessToken ?? '',
                lang: settings.language,
                returnUrl: settings.returnUrl
              })}`
            )
          }}
          addressId={address?.id}
        />
      </div>
    </BillingAddressForm>
  )
}

export default CustomerAddressForm
