import { motion } from "framer-motion";

const Header = ({ openSidebar, sidebarState }) => {
  return(
    <motion.header
      className="transition relative transform px-6 py-3 w-full grid grid-cols-5 bg-white border-b border-slate-200 -translate-y-12"
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <div className="col"/>
      <div className="col flex justify-center items-center col-span-3">
        <span>
          👋 Hey, I'm
          <a
          href="https://ryanparag.com"
          className="ml-1 font-bold text-blue-600 hover:underline focus:underline hover:text-blue-700 focus:text-blue-700 transition"
          >
          Ryan Parag
          </a>
        </span>
      </div>
      <div className="col flex justify-end">
        <motion.button
          className="button opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.12, delay: 3 }}
          onClick={() => openSidebar(!sidebarState)}
        >
          <svg className="mr-1" width="20" height="20" fill="none" viewBox="0 0 24 24">
            {
              sidebarState ? (
                <>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
                </>
              )
              :
              (
                <>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75H19.25"></path>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 18.25H19.25"></path>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12H19.25"></path>
                </>
              )
            }
          </svg>
          { sidebarState ? 'Close' : 'Info'}
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header