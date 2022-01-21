import axios, { AxiosError } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ProfileContent from '../../components/Profile/ProfileContent'
import { backend } from '../../util/util'

export interface UserRes {
  uuid: string
  email: string
  username: string
  bio: string
  createdAt: Date
  updatedAt: Date
}

const ProfilePage: NextPage<{ data: UserRes }> = ({ data: user }) => {
  // const router = useRouter()
  // const { uuid } = router.query
  // const [user, setUser] = useState<UserRes>()

  // useEffect(() => {
  //   console.log(uuid)
  //   if (!uuid) return
  //   ;(async () => {
  //     try {
  //       const { data, status } = await axios.get<UserRes>(
  //         `${backend()}/user/?uuid=${uuid}`
  //       )

  //       if (status === 404) {
  //         router.push('/404')
  //       }

  //       setUser(data)
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         const err = error as AxiosError
  //         if (err.response?.status === 404) {
  //           // router.push('/404')
  //         }
  //       }
  //     }
  //   })()
  // }, [uuid])

  const router = useRouter()
  useEffect(() => {
    if (!user) router.push('/404')
  }, [user])
  return user && <ProfileContent data={user} />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { uuid } = ctx.query
  if (!uuid) return { props: { data: null } }
  try {
    const { data, status } = await axios.get<UserRes>(
      `${backend()}/user/?uuid=${uuid}`
    )

    if (status === 404) {
      ctx.res.statusCode = 404
    }

    return {
      props: {
        data,
      },
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError
      if (error.response?.status === 404) {
        ctx.res.statusCode = 404
      }
    }

    return {
      props: {
        data: null,
      },
    }
  }
}

export default ProfilePage
