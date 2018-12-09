import { Component } from 'react'
// import { string } from 'prop-types'
import styled from '@emotion/styled'
import { Flex, Card, Heading, Text, Button } from '@rebass/emotion'

import NavBar from '../../components/navbar'

const Input = styled.input`
  border: 3px solid black;
  border-radius: 5px;
  font-family: 'Inter UI', sans-serif;
  font-weight: 500;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
  height: 2em;

  @media screen and (min-width: 425px) {
    width: 100%;
    height: auto;
    margin-bottom: 0;
  }
`

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
      <Card
        as='main'
        bg='white'
        m={'10px'}
        style={{ height: 'calc(100vh - 20px)' }}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <NavBar />
        <Flex width={1} justifyContent='center' alignItems='center'>
          <Card
            mt={3}
            width={[1, null, 2 / 3, 1 / 2]}
            // border={[null, null, '1px solid black']}
            p={[3, 4, 5]}
            borderRadius={7}
            boxShadow={[null, null, '0 2px 16px rgba(0, 0, 0, 0.25)']}
          >
            <Heading fontFamily='sans' mb={3} fontSize={[30, 50]} lineHeight={[1, 0.98]}>
              Event creation is coming soon.
            </Heading>
            <Text fontFamily='serif'>
              Keep up with our progress through our newsletter and be one of the first to know when
              you can use Knife:
            </Text>
            <Flex flexDirection={['column', 'row']} justifyContent='center' mt={4}>
              <Input type='email' placeholder='awesome.name@your.email' />
              <Button bg='mediumspringgreen' ml={['', 2]} color='black' border='3px solid black'>
                Sign Up
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Card>
    )
  }
}

// CreatePage.propTypes = {
//   hostname: string
// }

export default CreatePage
