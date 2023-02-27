import { motion } from "framer-motion"
import Image from "next/image"

const Sidebar = ({ open }) => {

  const projects = [
    {
      name: 'Slack Themes',
      icon: '/projects/slack-themes.svg',
      description: 'Having trouble keeping track of all of your Slack workspaces?',
      url: 'https://slack-themes.vercel.app'
    }, {
      name: 'Tampa Bay Designers',
      icon: '/projects/tampa-bay.svg',
      description: 'How to get involved in one of the many local design communities',
      url: 'https://tampabay.design'
    }, {
      name: 'Race Times',
      icon: '/projects/race-times.svg',
      description: 'A directory of translated race times schedules and leaderboards',
      url: 'https://race-times.vercel.app'
    }
  ]

  return(
    <div className={`transition fixed top-0 bottom-0 right-0 w-[320px] bg-white border-l border-slate-200 z-30 ${open ? 'translate-x-0' : 'translate-x-[320px]'}`}>
      <div className="py-6 px-4 bg-slate-100 text-base">
        <p className="mb-4">
          👋 Hey, I'm <a href="https://ryanparag.com" target="_blank" className="underline">Ryan</a>!
        </p>
        <p className="mb-4">
          I'm a product designer living in Sunny 🌞 Tampa Bay.
        </p>
        <p>
          I strive to help build useful products with an interdisciplinary skillset, bred from my fascination of systems, art, and code.
        </p>
        <p>If you like <a href="https://github.com/ryan-parag/donut-drums" target="_blank" className="underline">this project</a>, check out a few other things I built below &darr;</p>
      </div>
      <ul>
        {
          projects.map((item, i) => (
            <motion.li
              className="opacity-0 flex items-start py-5 px-3"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1*i }}
            >
              <div className="h-8 w-8 relative rounded-full overflow-hidden border border-slate-200 shadow-sm">
                <Image layout="fill" src={item.icon}/>
              </div>
              <div className="w-full pl-3 flex-1 flex flex-col">
                <h5 className="font-bold mb-2">{item.name}</h5>
                <p className="text-sm text-slate-700 mb-2">{item.description}</p>
                <a className="text-sm underline" href={item.url} target="_blank">
                  {item.url}
                </a>
              </div>
            </motion.li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar