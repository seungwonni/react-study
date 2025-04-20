import Link from 'next/link'

function Home() {
  return (
      <ul>
        <li>
          <Link href="/dashboard">
            dashboard
          </Link>
        </li>
      </ul>
  )
}

export default Home