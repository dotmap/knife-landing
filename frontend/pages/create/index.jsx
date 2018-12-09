import { Component } from 'react'
// import { string } from 'prop-types'
import { Flex, Card, Heading, Text, Button } from '@rebass/emotion'

import Input from '../../components/input'

class CreatePage extends Component {
  static getInitialProps ({ req }) {
    let hostname
    if (req) {
      hostname = `https://${req.headers.host}`
    } else {
      const { protocol, host } = window.location
      hostname = `${protocol}//${host}`
    }

    return { hostname }
  }

  render () {
    return (
      <main>
        <Flex width={1} justifyContent='center' alignItems='center'>
          <Card
            m={3}
            width={[1, null, 2 / 3, 1 / 2]}
            // border={[null, null, '1px solid black']}
            p={[3, 4, 5]}
            borderRadius={7}
            boxShadow={[null, null, '0 2px 16px rgba(0, 0, 0, 0.25)']}
          >
            <Heading fontFamily='sans' mb={3} fontSize={[30, 50]} lineHeight={[1, 0.98]}>
              Event creation is coming soon.
            </Heading>
            <Text fontFamily='serif' m={['', 4]}>
              Sign up for our newsletter to stay up-to-date on our progress:
            </Text>
            <Flex flexDirection={['column', 'row']} justifyContent='center' mt={4}>
              <Input type='email' placeholder='awesome.name@your.email' />
              <Button bg='mediumspringgreen' ml={['', 2]} color='black' border='3px solid black'>
                Sign Up
              </Button>
            </Flex>
          </Card>
        </Flex>
      </main>
    )
  }
}

// CreatePage.propTypes = {
//   hostname: string
// }

export default CreatePage
