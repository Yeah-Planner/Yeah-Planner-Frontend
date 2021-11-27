import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { deleteUser } from '../storage/storage'

const Logout: NextPage<{}> = () => {
  const router = useRouter()
  useEffect(() => {
    deleteUser()

    router.replace('/')
  }, [])

  return <div>Logout</div>
}

export default Logout
