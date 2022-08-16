import { useContext } from "react"
import { useTranslation } from "react-i18next"

import { AddressInputGroup } from "components/composite/Address/AddressInputGroup"
import CloseSolidIcon from "components/ui/icons/CloseSolidIcon"
import Title from "components/ui/Title"

import {
  Form,
  Grid,
  DiscardChanges,
  FormButtons,
  Text,
  SaveButton,
} from "./styled"

import CustomerAddressContext from "context/CustomerAddressContext"

interface Props {
  onClose: () => void
}

const CustomerAddressForm: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation()
  const { address, setShowAddressForm } = useContext(CustomerAddressContext)

  return (
    <Form>
      <Title>
        {address
          ? t("addressForm.edit_address_title")
          : t("addressForm.new_address_title")}
      </Title>
      <Grid>
        <AddressInputGroup
          fieldName="customer_address_first_name"
          resource="customerAddress"
          type="text"
          value={address?.firstName || ""}
        />
        <AddressInputGroup
          fieldName="customer_address_last_name"
          resource="customerAddress"
          type="text"
          value={address?.lastName || ""}
        />
      </Grid>
      <AddressInputGroup
        fieldName="customer_address_line_1"
        resource="customerAddress"
        type="text"
        value={address?.line1 || ""}
      />
      <Grid>
        <AddressInputGroup
          fieldName="customer_address_city"
          resource="customerAddress"
          type="text"
          value={address?.city || ""}
        />
        <AddressInputGroup
          fieldName="customer_address_country_code"
          resource="customerAddress"
          type="text"
          value={address?.countryCode || ""}
        />
      </Grid>
      <Grid>
        <AddressInputGroup
          fieldName="customer_address_state_code"
          resource="customerAddress"
          type="text"
          value={address?.stateCode || ""}
        />
        <AddressInputGroup
          fieldName="customer_address_zip_code"
          resource="customerAddress"
          type="text"
          value={address?.zipCode || ""}
        />
      </Grid>
      <AddressInputGroup
        fieldName="customer_address_phone"
        resource="customerAddress"
        type="tel"
        value={address?.phone || ""}
      />
      <FormButtons>
        <DiscardChanges onClick={onClose}>
          <CloseSolidIcon />
          <Text>{t("addressForm.discard_changes")}</Text>
        </DiscardChanges>
        <SaveButton
          label={t("addressForm.save")}
          onClick={() => setShowAddressForm(false)}
          addressId={address.id}
        />
      </FormButtons>
    </Form>
  )
}

export default CustomerAddressForm
