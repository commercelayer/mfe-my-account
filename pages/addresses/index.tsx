import { NextPage } from "next"

import Addresses from "components/composite/Addresses"
import EmptyAddresses from "components/composite/Addresses/EmptyAddresses"

interface Props {
  settings: CustomerSettings
}

const AddressesPage: NextPage<Props> = ({ settings }) => {
  // return ( <EmptyAddresses settings={settings} /> )
  
  return (
    <Addresses settings={settings} />
  )
}

export default AddressesPage