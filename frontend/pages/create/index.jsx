import { Component } from 'react'
import Link from 'next/link'
import Header from '../../components/header'
import { string, bool } from 'prop-types'

class CreatePage extends Component {
  static getInitialProps ({ req }) {
    const isServer = typeof window === 'undefined'
    let hostname
    if (req) {
      hostname = `http${process.env.NOW_REGION ? 's' : ''}://${req.headers.host}`
    } else {
      const { protocol, host } = window.location
      hostname = `${protocol}//${host}`
    }

    return { hostname, isServer }
  }

  render () {
    return (
      <main>
        <Header />
        <section>
          <p>
            This is another page of the SSR example, you accessed it
            <strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
            <p>
              {this.props.isServer ? <p>Server: </p> : <p>Client: </p>}
              {this.props.hostname}
            </p>
          </p>
          <p>You can reload to see how the page change.</p>
          <Link href='/'>
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    )
  }
}

CreatePage.propTypes = {
  hostname: string,
  isServer: bool
}

export default CreatePage
