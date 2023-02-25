import { motion } from "framer-motion";

const Instructions = () => {
  return(
    <div className="flex justify-center">
      <motion.div
        className="inline-flex items-center mb-4 text-sm px-3 py-1 border border-slate-300 shadow-sm rounded-lg mx-1 scale-0 opacity-0"
        animate={{ scale: [1.2, 0.9, 1.1, 0.95, 1], opacity: 1 }}
        transition={{ duration: 0.2, delay: 2 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 96 960 960" width="48"><path d="M465.497 136Q556 136 620.5 199.5 685 263 685 354q0 52-22.5 98T599 530h-34v-50q29-23 44.5-56t15.5-70q0-66-47-112t-113-46q-66 0-113 46t-47 112q0 36.877 15.5 69.938Q336 457 365 480v72q-56-29-88-82t-32-116q0-91 64.5-154.5T465.497 136ZM427 976q-17 0-32-6.5T369 952L163 746l56-58q14-14 31.5-21.5T287 664l78 18V356q0-42 29-71t71-29q42 0 71 29t29 71v172h26q5 0 9 2t9 4l148 72q24 11 35.5 35.5T799 692l-36 218q-5 29-28 47.5T683 976H427Zm-8-60h281l43-249-183-91h-55V356q0-18-11-29t-29-11q-18 0-29 11t-11 29v399l-154-33-23 23 171 171Zm281 0H419h281Z"/></svg>
        <span className="pl-1">Use keyboard</span>
      </motion.div>
      <motion.div
        className="inline-flex items-center mb-4 text-sm px-3 py-1 border border-slate-300 shadow-sm rounded-lg mx-1 scale-0 opacity-0"
        animate={{ scale: [1.2, 0.9, 1.1, 0.95, 1], opacity: 1 }}
        transition={{ duration: 0.2, delay: 2.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 96 960 960" width="48"><path d="M560 925v-62q97-28 158.5-107.5T780 575q0-101-61-181T560 287v-62q124 28 202 125.5T840 575q0 127-78 224.5T560 925ZM120 696V456h160l200-200v640L280 696H120Zm420 48V407q55 17 87.5 64T660 576q0 57-33 104t-87 64ZM420 408 307 516H180v120h127l113 109V408Zm-94 168Z"/></svg>
        <span className="pl-1">Turn sound on</span>
      </motion.div>
    </div>
  )
}

export default Instructions