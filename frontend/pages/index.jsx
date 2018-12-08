import { Text, Heading } from '@rebass/emotion'

import NavBar from '../components/navbar'

const HomePage = () => (
  <main>
    <NavBar />
    <section>
      <Text fontFamily='mono'>Spread your game jam</Text>
      <Heading fontFamily='sans'>Run your event with Knife</Heading>
    </section>
  </main>
)

export default HomePage
