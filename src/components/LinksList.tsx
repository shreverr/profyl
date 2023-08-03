import { FC } from 'react'
import LinkButton from './ui/LinkButton'
import { Icons } from './ui/Icons'

interface LinksListProps {}

const LinksList: FC<LinksListProps> = () => {
  const myLinkNames = ["Github", "Twitter", "Discord", "LinkedIn"]
  const myLinks = [
    "https://github.com/shreverr", 
    "https://twitter.com/Shreshthtwts", 
    "https://discordapp.com/users/shrever", 
    "https://www.linkedin.com/in/shreshth-verma-89aa80246/"
  ]
  const myLinkIcons = [Icons.Github, Icons.Twitter, Icons.Discord, Icons.LinkedIn]

  return (
    <section
    className='
    flex
    flex-col
    items-center
    justify-center
    p-2
    pt-4
    gap-6
    w-full
    sm:w-96
    '>
    {/* Maps all the links */}
    {myLinkNames.map((mySocialHandle, index) => 
      <LinkButton linkName={mySocialHandle} linkIcon={myLinkIcons[index]} userLink={myLinks[index] } key={index}/>)}
    </section>
  )
}

export default LinksList