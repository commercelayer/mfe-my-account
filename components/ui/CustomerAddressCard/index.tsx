import { Address, AddressField } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import { AddressCard } from "components/ui/AddressCard"

interface Props {
  readonly?: boolean
}

const CustomerAddressCard: React.FC<Props> = ({ readonly }) => {
  const { t } = useTranslation()

  const actionsNeeded = readonly === undefined

  return (
    <Address
      className={` ${actionsNeeded ? "group" : ""} `}
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
              readonly={readonly}
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
