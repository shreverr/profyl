import { FC, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

const Card: FC<CardProps> = ({children}) => {
  return (
    <div className=' 
      flex
      flex-col
      sm:gap-8
      p-8
      border
      rounded-3xl
      backdrop-blur-sm
      '>
      {children}
    </div>)
}

export default Card