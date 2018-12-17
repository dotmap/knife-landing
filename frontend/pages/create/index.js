import { Component } from 'react'
import sillyname from 'sillyname'
import { string } from 'prop-types'
import { Flex, Card, Heading } from '@rebass/emotion'

import Creator from '../../components/creator'

class CreatePage extends Component {
  static getInitialProps ({ req }) {
    const isServer = typeof global === 'undefined'
    const example = `${sillyname()} Jam`
    let hostname
    if (req) {
      hostname = `https://${req.headers.host}`
    } else {
      const { protocol, host } = window.location
      hostname = `${protocol}//${host}`
    }

    return { hostname, isServer, example }
  }

  render () {
    return (
      <main>
        <Flex width={1} justifyContent='center' alignItems='center'>
          <Card
            m={3}
            width={[1, null, 2 / 3, 1 / 2]}
            p={[3, 4, 5]}
            borderRadius={7}
            boxShadow={[null, null, '0 2px 16px rgba(0, 0, 0, 0.25)']}
          >
            <Heading fontFamily='sans' mb={4} fontSize={[30, 50]} lineHeight={[1, 0.98]}>
              Let's get your event started.
            </Heading>
            <Creator
              example={this.props.example}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  window.alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            />
          </Card>
        </Flex>
      </main>
    )
  }
}

CreatePage.propTypes = {
  // hostname: string,
  // isServer: bool,
  example: string.isRequired
}

export default CreatePage
