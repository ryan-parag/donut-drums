import Logo from '@components/Logo'
import { motion } from 'framer-motion'

const Sticker = () => {
  return(
    <motion.div
      className="inline-flex items-center bg-white p-2 transform rotate-0 shadow-inner relative -top-2 rounded-lg shadow ring-1 ring-slate-200 opacity-0"
      initial={{ scale: 1.2 }}
      animate={{ rotate: '3deg', opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <div className="h-10 w-10">
        <Logo/>
      </div>
      <span className="pl-2 text-lg font-extrabold uppercase tracking-wider">Donut Drums</span>
    </motion.div>
  )
}

export default Sticker