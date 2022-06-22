import { Address, AddressField } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import { AddressCard } from "../AddressCard"

interface Props {
  showActions?: boolean
}

const CustomerAddressCard: React.FC<Props> = ({ showActions }) => {
  const { t } = useTranslation()

  const actionsNeeded = showActions === undefined ? true : showActions

  return (
    <Address
      className={` ${actionsNeeded ? 'group' : ''} `}
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
              showActions={actionsNeeded}
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
