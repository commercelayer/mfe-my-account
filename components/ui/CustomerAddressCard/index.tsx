import { Address, AddressField } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import { AddressCard } from "../AddressCard"

interface AddressCardProps {
  addressType: "shipping" | "billing"
}

const CustomerAddressCard: React.FC<AddressCardProps> = ({ addressType }) => {
  const { t } = useTranslation()
  const dataCy =
    addressType === "billing"
      ? "customer-billing-address"
      : "customer-shipping-address"

  return (
    <>
      <Address
        data-cy={dataCy}
        className="group"
        disabledClassName="opacity-50 cursor-not-allowed"
      >
        {
          <AddressField>
            {({ address }) => (
              <AddressCard
                firstName={address.firstName}
                lastName={address.lastName}
                city={address.city}
                line1={address.line1}
                line2={address.line2}
                zipCode={address.zipCode}
                stateCode={address.stateCode}
                countryCode={address.countryCode}
                phone={address.phone}
                addressType={addressType}
                editButton={t("addresses.edit")}
                deleteButton={t("addresses.delete")}
              />
            )}
          </AddressField>
        }
      </Address>
    </>
  )
}

export default CustomerAddressCard
