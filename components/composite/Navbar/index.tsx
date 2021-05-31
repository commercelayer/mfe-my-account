import Link from "next/link"

interface Props {
  accessToken: string
}

const Navbar: React.FC<Props> = ({ accessToken }) => {
  return (
    <nav data-cy="navbar">
      <ul>
        <li>
          <Link href={`/profile?accessToken=${accessToken}`}>Profile</Link>
        </li>
        <li>
          <Link href={`/addresses?accessToken=${accessToken}`}>Addresses</Link>
        </li>
        <li>
          <Link href={`/payments?accessToken=${accessToken}`}>Payments</Link>
        </li>
        <li>
          <Link href={`/orders?accessToken=${accessToken}`}>Orders</Link>
        </li>
        <li>
          <Link href={`/returns?accessToken=${accessToken}`}>Returns</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
