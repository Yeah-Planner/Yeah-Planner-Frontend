import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header/Header'
import GlobalStyle from '../styles/GlobalStyle'
import { theme } from '../styles/theme'

const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 360px;
  width: calc(100% - 2rem);
`

function MyApp({ Component, pageProps }: AppProps) {
  const [login, setLogin] = useState(false)

  return (
    <>
      <Head>
        <title>Yeah Planner</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header login={login} setLogin={setLogin} />
        <Content>
          <Component {...pageProps} />
        </Content>
      </ThemeProvider>
    </>
  )
}

export default MyApp
