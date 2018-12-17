import App, { Container } from 'next/app'
import Head from 'next/head'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import NavBar from '../components/navbar'
import theme from '../theme'

const Highlight = styled.div`
  background: rgb(76, 255, 190);
  background: linear-gradient(
    35deg,
    rgba(0, 255, 162, 1) 5%,
    rgba(0, 71, 255, 1) 50%,
    rgba(255, 0, 168, 1) 95%
  );
  height: 20px;
  width: 100%;
`

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Knife by dotmap</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Highlight />
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
