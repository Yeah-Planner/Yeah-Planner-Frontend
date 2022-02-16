import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { getUser, User } from '../storage/storage'
import GlobalStyle from '../styles/GlobalStyle'
import { theme } from '../styles/theme'

const Content = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 360px;
  width: calc(100% - 2rem);
`

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const user = getUser()

    if (user) {
      // Validate user
    }

    setUser(getUser())
  }, [Component, pageProps])

  return (
    <>
      <Head>
        <title>Yeah Planner</title>
        <meta name="keyword" content="todo, to-do, schedule, planner, study" />
        <meta
          name="description"
          content="Yeah Planner is a whole-in-one project such as to-do management and etc. You can now create your accout and start managing everything."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header login={!!user} />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
