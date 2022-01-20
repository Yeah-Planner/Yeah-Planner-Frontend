import { NextPage } from 'next'
import { UserRes } from '../../pages/user/[uuid]'
import { ProfileUsernameStyle } from './profile.style'

const ProfileContent: NextPage<{ data: UserRes }> = ({
  data: { username, bio },
}) => {
  return (
    <>
      <ProfileUsernameStyle>{username}</ProfileUsernameStyle>
    </>
  )
}

export default ProfileContent
