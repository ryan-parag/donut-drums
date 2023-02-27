import { motion } from "framer-motion";

const Header = ({ openSidebar, sidebarState }) => {
  return(
    <motion.header
      className="transition relative transform px-6 py-3 w-full flex justify-end bg-white -translate-y-12"
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <div className="col flex justify-end">
        <motion.button
          className={`button opacity-0 !rounded-full h-10 !w-10 !p-0 inline-flex items-center justify-center  ${sidebarState ? '-right-4' : 'right-0'}`}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.12, delay: 3 }}
          onClick={() => openSidebar(!sidebarState)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
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
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header