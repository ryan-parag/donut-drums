import { motion } from "framer-motion";

const Header = () => {
  return(
    <motion.header
      className="transition transform px-6 py-4 flex w-full justify-center bg-gradient-to-r from-slate-100 to-white border-b border-slate-200 -translate-y-12"
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      👋 Hey, I'm
      <a
      href="https://ryanparag.com"
      className="ml-1 font-bold text-blue-600 hover:underline focus:underline hover:text-blue-700 focus:text-blue-700 transition"
      >
      Ryan Parag
      </a>
    </motion.header>
  )
}

export default Header