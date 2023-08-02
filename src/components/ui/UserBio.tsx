import { FC } from 'react'

interface UserBioProps {
  
}

const UserBio: FC<UserBioProps> = () => {
  const userBio = "DevOps && WebDev"
  
  return (
  <article
  className='
  font-normal
  text-sm
  '>
    {userBio}
  </article>
  )
}

export default UserBio