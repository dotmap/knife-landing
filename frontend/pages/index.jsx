import { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import fetch from 'cross-fetch'
import Header from '../components/header'

class HomePage extends Component {
  static async getData (hostname) {
    let greeting
    try {
      const res = await fetch(`${hostname}/api/greeting`)
      greeting = await res.text()
    } catch (e) {
      greeting = JSON.stringify(e)
    }
    return greeting
  }

  static async getInitialProps ({ req }) {
    const isServer = typeof window === 'undefined'
    let hostname
    if (req) {
      hostname = `http${process.env.NOW_REGION ? 's' : ''}://${req.headers.host}`
    } else {
      const { protocol, host } = window.location
      hostname = `${protocol}//${host}`
    }

    const greeting = await this.getData(hostname)

    return { hostname, isServer, greeting }
  }

  render () {
    return (
      <main>
        <Header />
        <section>
          <p>
            {this.props.isServer ? <p>Server: </p> : <p>Client: </p>}
            {this.props.hostname}
            {this.props.greeting}
          </p>
          <Link href='/about'>
            <a>Go to About Me</a>
          </Link>
        </section>
      </main>
    )
  }
}

HomePage.propTypes = {
  greeting: PropTypes.string,
  hostname: PropTypes.string,
  isServer: PropTypes.bool
}

export default HomePage
