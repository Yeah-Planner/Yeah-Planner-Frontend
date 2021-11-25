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
  // TODO: make api that calls the backend auth, and checks if the user is logged in

  return (
    <>
      <Head>
        <title>Yeah Planner</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
      </ThemeProvider>
    </>
  )
}

export default MyApp
