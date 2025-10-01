import { AddressesContainer } from "@commercelayer/react-components/addresses/AddressesContainer"
import { useContext } from "react"
import { useRoute } from "wouter"

import CustomerAddressForm from "#components/composite/CustomerAddressForm"
import { appRoutes } from "#data/routes"
import { AppContext } from "#providers/AppProvider"
import { CustomerAddressProvider } from "#providers/CustomerAddressProvider"

function AddressFormPage(): JSX.Element {
  const [, params] = useRoute<{ addressId: string }>(appRoutes.editAddress.path)
  const addressId = params == null ? undefined : params.addressId
  const ctx = useContext(AppContext)

  return (
    <CustomerAddressProvider
      accessToken={ctx?.accessToken as string}
      domain={ctx?.domain as string}
      addressId={addressId}
    >
      <AddressesContainer>
        <CustomerAddressForm />
      </AddressesContainer>
    </CustomerAddressProvider>
  )
}

export default AddressFormPage
