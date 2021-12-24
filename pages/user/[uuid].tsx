import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface Props {}

const ProfilePage: NextPage<Props> = ({}) => {
  const { uuid } = useRouter().query

  return <>{uuid}</>
}

export default ProfilePage
