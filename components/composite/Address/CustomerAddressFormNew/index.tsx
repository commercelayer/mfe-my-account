import { AddressCollection } from "@commercelayer/js-sdk"
import { Dispatch } from "react"
import { useTranslation } from "react-i18next"

import { AddressInputGroup } from "components/composite/Address/AddressInputGroup"
import CloseSolidIcon from "components/ui/icons/CloseSolidIcon"
import Title from "components/ui/Title"

import { Wrapper, Grid, DiscardChanges, Text } from "./styled"

interface Props {
  customerAddress?: AddressCollection
  onClose: Dispatch<boolean>
}

const CustomerAddressFormNew: React.FC<Props> = ({
  customerAddress,
  onClose,
}: Props) => {
  const { t } = useTranslation()

  return (
    <Wrapper id="customer-address-form">
      <Title>{t("addressForm.title")}</Title>
      <Grid>
        <AddressInputGroup
          fieldName="customer_address_first_name"
          resource="customerAddress"
          type="text"
          value={customerAddress?.firstName || ""}
        />
        <AddressInputGroup
          fieldName="customer_address_last_name"
          resource="customerAddress"
          type="text"
          value={customerAddress?.lastName || ""}
        />
      </Grid>
      <AddressInputGroup
        fieldName="customer_address_line_1"
        resource="customerAddress"
        type="text"
        value={customerAddress?.line1 || ""}
      />
      <Grid>
        <AddressInputGroup
          fieldName="customer_address_city"
          resource="customerAddress"
          type="text"
          value={customerAddress?.city || ""}
        />
        <AddressInputGroup
          fieldName="customer_address_country_code"
          resource="customerAddress"
          type="text"
          value={customerAddress?.countryCode || ""}
        />
      </Grid>
      <Grid>
        <AddressInputGroup
          fieldName="customer_address_state_code"
          resource="customerAddress"
          type="text"
          value={customerAddress?.stateCode || ""}
        />
        <AddressInputGroup
          fieldName="customer_address_zip_code"
          resource="customerAddress"
          type="text"
          value={customerAddress?.zipCode || ""}
        />
      </Grid>
      <AddressInputGroup
        fieldName="customer_address_phone"
        resource="customerAddress"
        type="tel"
        value={customerAddress?.phone || ""}
      />
      <DiscardChanges onClick={onClose}>
        <CloseSolidIcon />
        <Text>{t("addressForm.discard_changes")}</Text>
      </DiscardChanges>
    </Wrapper>
  )
}

export default CustomerAddressFormNew
