import { Address, AddressField } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import { AddressCard } from "../AddressCard"

const CustomerAddressCard: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Address
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
              addressType="customer"
              editButton={t("addresses.edit")}
              deleteButton={t("addresses.delete")}
            />
          )}
        </AddressField>
      }
    </Address>
  )
}

export default CustomerAddressCard
