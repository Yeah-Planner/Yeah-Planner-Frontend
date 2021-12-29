import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getUser } from '../storage/storage'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (!getUser()) {
      // not logged in
      router.push('/about')
    }
  }, [])

  return <div>Hello World</div>
}

export default Home
