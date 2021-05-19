import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/profile'>Profile</Link>
        </li>
        <li>
          <Link href='/addresses'>Addresses</Link>
        </li>
        <li>
          <Link href='/payments'>Payments</Link>
        </li>
        <li>
          <Link href='/orders'>Orders</Link>
        </li>
        <li>
          <Link href='/returns'>Returns</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar