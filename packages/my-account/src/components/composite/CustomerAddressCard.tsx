import { Address } from "@commercelayer/react-components/addresses/Address"
import { AddressField } from "@commercelayer/react-components/addresses/AddressField"

import { AddressCard } from "#components/composite/AddressCard"

interface Props {
  readonly?: boolean
}

function CustomerAddressCard({ readonly }: Props): JSX.Element {
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
