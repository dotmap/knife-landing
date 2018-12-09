import { Text, Heading, Card } from '@rebass/emotion'

import NavBar from '../components/navbar'

const HomePage = () => (
  <Card
    as='main'
    bg='white'
    m={'10px'}
    // border='3px solid black'
    style={{ height: 'calc(100vh - 20px)' }}
    box-shadow='0 2px 16px rgba(0, 0, 0, 0.25)'
  >
    <NavBar />
    <section>
      <Text fontFamily='serif'>Spread your game jam</Text>
      <Heading fontFamily='sans'>Run your event with Knife</Heading>
    </section>
  </Card>
)

export default HomePage
