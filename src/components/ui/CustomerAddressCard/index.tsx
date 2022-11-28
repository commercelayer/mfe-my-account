import { Address, AddressField } from "@commercelayer/react-components"

import { AddressCard } from "#components/ui/AddressCard"

interface Props {
  readonly?: boolean
}

const CustomerAddressCard: React.FC<Props> = ({ readonly }) => {
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
              address={address}
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
