import {
  AddressesContainer,
  Address,
  AddressField,
} from "@commercelayer/react-components"

const Addresses = () => {
  return (
    <>
      <h1>Addresses Page</h1>
      <AddressesContainer>
        <Address
          className="w-1/2 p-2 m-2 border rounded cursor-pointer hover:border-blue-500 shadow-sm"
          selectedClassName="border-blue-500"
          data-cy="customer-billing-address"
        >
          <div className="flex-col pl-1 font-bold">
            <AddressField name="line_1" />
            <AddressField name="city" />
          </div>
        </Address>
      </AddressesContainer>
    </>
  )
}

export default Addresses
