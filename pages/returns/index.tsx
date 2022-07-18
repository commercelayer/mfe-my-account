import { NextPage } from "next"

import Returns from "components/composite/Returns"
import EmptyReturns from "components/composite/Returns/EmptyReturns"

interface Props {
  settings: CustomerSettings
}

const ReturnsPage: NextPage<Props> = ({ settings }) => {
  // return ( <Returns settings={settings} /> )

  return (
    <EmptyReturns settings={settings} />
  )
}

export default ReturnsPage