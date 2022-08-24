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
              firstName={address.first_name}
              lastName={address.last_name}
              city={address.city}
              line1={address.line_1}
              line2={address.line_2}
              zipCode={address.zip_code}
              stateCode={address.state_code}
              countryCode={address.country_code}
              phone={address.phone}
              addressType="customer"
              readonly={readonly}
            />
          )}
        </AddressField>
      }
    </Address>
  )
}

export default CustomerAddressCard
