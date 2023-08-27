import { FC } from 'react'

interface ProfilePicProps {
  
}

const ProfilePic: FC<ProfilePicProps> = () => {
  return (
  <figure>
    <img 
    src="./profile-pic.jpeg" 
    alt="Shreshth Verma"
    className='
    antialiased
    rounded-full
    outline
    outline-offset-4
    w-28
    '/>
  </figure>)
}

export default ProfilePic