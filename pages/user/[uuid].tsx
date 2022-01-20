import axios, { AxiosError } from 'axios'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ProfileContent from '../../components/Profile/ProfileContent'
import { backend } from '../../util/util'
import { useRouter } from 'next/router'

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
    console.log(uuid)
    if (!uuid) return
    ;(async () => {
      try {
        const { data, status } = await axios.get<UserRes>(
          `${backend()}/user/?uuid=${uuid}`
        )

        if (status === 404) {
          router.push('/404')
        }

        setUser(data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError
          if (err.response?.status === 404) {
            // router.push('/404')
          }
        }
      }
    })()
  }, [uuid])

  return user ? <ProfileContent data={user} /> : <>loading...</>
}

export default ProfilePage
