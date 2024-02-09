import { XCircle } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useRoute } from "wouter"

import {
  Form,
  Grid,
  DiscardChanges,
  FormButtons,
  Text,
  SaveButton,
} from "./styled"

import { AddressInputGroup } from "#components/composite/Address/AddressInputGroup"
import Title from "#components/ui/Title"
import { appRoutes } from "#data/routes"
import { AppContext } from "#providers/AppProvider"
import { CustomerAddressContext } from "#providers/CustomerAddressProvider"

function CustomerAddressForm(): JSX.Element | null {
  const appCtx = useContext(AppContext)
  const ctx = useContext(CustomerAddressContext)
  const { t } = useTranslation()
  const [, setLocation] = useLocation()
  const address = ctx?.address
  const [, params] = useRoute<{ addressId: string }>(appRoutes.editAddress.path)
  const addressId = params == null ? undefined : params.addressId

  return address === undefined && addressId !== undefined ? null : (
    <Form errorClassName="hasError">
      <Title>
        {addressId === undefined
          ? t("addresses.addressForm.new_address_title")
          : t("addresses.addressForm.edit_address_title")}
      </Title>
      <Grid>
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
      </Grid>
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
      <Grid>
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
      </Grid>
      <Grid>
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
      </Grid>
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
      <FormButtons>
        <DiscardChanges
          onClick={() => {
            setLocation(
              `${appRoutes.addresses.makePath()}?accessToken=${
                appCtx?.accessToken
              }`
            )
          }}
        >
          <XCircle className="w-4 h-4" />
          <Text>{t("addresses.addressForm.discard_changes")}</Text>
        </DiscardChanges>
        <SaveButton
          data-test-id="save-address"
          label={t("addresses.addressForm.save")}
          onClick={() => {
            setLocation(
              `${appRoutes.addresses.makePath()}?accessToken=${
                appCtx?.accessToken
              }`
            )
          }}
          addressId={address?.id}
        />
      </FormButtons>
    </Form>
  )
}

export default CustomerAddressForm
