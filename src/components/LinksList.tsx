import { FC } from 'react'
import LinkButton from './ui/LinkButton'
import { Icons } from './ui/Icons'

interface LinksListProps { }

const LinksList: FC<LinksListProps> = () => {
  const userLinks = [
    { siteName: "Github", link: "https://github.com/shreverr", icon: Icons.Github },
    { siteName: "Twitter", link: "https://twitter.com/Shreshthtwts", icon: Icons.Twitter },
    { siteName: "Discord", link: "https://discordapp.com/users/shrever", icon: Icons.Discord },
    { siteName: "LinkedIn", link: "https://www.linkedin.com/in/shreshth-verma-89aa80246/", icon: Icons.LinkedIn }
  ];

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
      {userLinks.map((element, index) =>
        <LinkButton linkName={element.siteName} linkIcon={element.icon} userLink={element.link} key={index} />)}
    </section>
  )
}

export default LinksList