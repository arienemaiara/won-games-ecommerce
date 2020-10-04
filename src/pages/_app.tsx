import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="favicon.ico" type="/img/icon-512.png" />
        <link
          rel="apple-touch-icon"
          href="favicon.ico"
          type="/img/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple projeto starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
