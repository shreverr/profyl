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
    transition 
    ease-in-out 
    delay-150 
    hover:-translate-y-1
    hover:scale-125
    duration-300
    '/>
    </figure>)
}

export default ProfilePic