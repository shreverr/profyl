import { FC, ReactNode } from 'react'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//   const element = 


interface LinkButtonProps {
  userLink: string,
  linkName: string,
  linkIcon: ReactNode,
}

const LinkButton: FC<LinkButtonProps> = ({userLink, linkName, linkIcon}) => {
  return (  
    <div
    className='
    flex
    justify-center
    items-center  
    gap-4
    border
    p-2
    rounded-full
    w-full
    '>
      {linkIcon}
      <a href={userLink}>{linkName}</a>
    </div>
  )
}

export default LinkButton 