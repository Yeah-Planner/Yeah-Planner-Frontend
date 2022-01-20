import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { backend } from '../../util/util'

export interface UserRes {
  uuid: string
  email: string
  username: string
  bio: string
  createdAt: Date
  updatedAt: Date
}

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { uuid } = router.query
  const [user, setUser] = useState<UserRes>()

  useEffect(() => {
    ;(async () => {
      const { data, status } = await axios.get<UserRes>(
        `${backend()}/user/?uuid=${uuid}`
      )

      if (status === 404) {
        router.push('/404')
      }

      setUser(data)
    })()
  }, [uuid])

  return user ? (
    <>
      <h1>{user.username}</h1>
    </>
  ) : (
    <>loading...</>
  )
}

export default ProfilePage
