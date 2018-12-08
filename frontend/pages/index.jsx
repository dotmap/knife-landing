import Link from 'next/link'
import Header from '../components/header'

const HomePage = () => (
  <main>
    <Header />
    <section>
      <Link href='/create'>
        <a>Create an event</a>
      </Link>
    </section>
  </main>
)

export default HomePage
