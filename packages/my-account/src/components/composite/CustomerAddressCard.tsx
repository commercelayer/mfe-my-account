import { Address } from "@commercelayer/react-components/addresses/Address"
import { AddressField } from "@commercelayer/react-components/addresses/AddressField"
import cn from "classnames"

import { AddressCard } from "#components/composite/AddressCard"

interface Props {
  readonly?: boolean
}

function CustomerAddressCard({ readonly }: Props): JSX.Element {
  const actionsNeeded = readonly === undefined

  return (
    <Address
      className={cn({ 'group': actionsNeeded })}
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
