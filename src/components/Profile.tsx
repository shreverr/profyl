import { FC } from 'react'
import ProfilePic from './ui/ProfilePic'
import UserBio from './ui/UserBio'

interface ProfileProps {
  
}

const Profile: FC<ProfileProps> = () => {
  const nameOfUser = "Shreshth Verma" 

  return (
    <section
    className='
    p-2
    flex
    flex-col
    justify-center
    items-center
    '>
      <ProfilePic />
      <div
      className='
      pt-3
      text-xl
      font-semibold
      '>
        {nameOfUser}
      </div>
      <UserBio />
    </section>
  )
}

export default Profile