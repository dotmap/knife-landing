import { Component } from 'react'
import { number } from 'prop-types'

import NavBar from '../components/navbar'

class ErrorPage extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <div>
        <NavBar />
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    )
  }
}

ErrorPage.propTypes = {
  statusCode: number
}

export default ErrorPage
