import App, { Container } from 'next/app'
import Head from 'next/head'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import theme from '../theme'

const Page = styled.div`
  position: absolute;
  background: rgb(76, 255, 190);
  background: linear-gradient(
    35deg,
    rgba(76, 255, 190, 1) 5%,
    rgba(19, 85, 255, 1) 50%,
    rgba(255, 19, 175, 1) 95%
  );
  height: 100vh;
  width: 100%;
`

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
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
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </Container>
    )
  }
}
