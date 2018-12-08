import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            href='https://fonts.googleapis.com/css?family=Overpass|Overpass+Mono'
            rel='stylesheet'
          />
          <style>{`body { margin: 0 }`}</style>
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
