import { FC, ReactNode } from 'react'

interface LinkButtonProps {
  userLink: string,
  linkName: string,
  linkIcon: ReactNode,
}

const LinkButton: FC<LinkButtonProps> = ({ userLink, linkName, linkIcon }) => {
  return (
    <a
      href={userLink}
      className='
      flex
      justify-center
      items-center  
      gap-4
      border
      p-2
      rounded-full
      w-full
      shadow-xl
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
      '>
      {linkIcon}
      {linkName}
    </a>
  )
}

export default LinkButton 