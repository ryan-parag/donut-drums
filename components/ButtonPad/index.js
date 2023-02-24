import React, { useState } from 'react'
import { motion } from 'framer-motion';
import useKeypress from 'react-use-keypress';

const ButtonPad = ({ src, keyPress, play, delay }) => {

  const [tap, setTap] = useState(false)

  const playSound = () => {
    play()
    setTap(true)
    setTimeout(() => {
      setTap(false)
    }, 120)
  }

  const handleClick = () => {
    playSound()
  }

  useKeypress(keyPress, () => {
    playSound()
  });

  return(
    <motion.div
      className="transform flex flex-col opacity-0 transition translate-y-2"
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2, delay: 0.2 + 0.1*delay }}
    >
      <motion.button
        className={`transform relative z-10 transition h-20 w-full rounded-lg bg-slate-200 border border-slate-300 flex flex-col p-4 items-center justify-end mb-0 after:content-['*'] after:rounded-lg after:absolute after:z-0 after:top-4 after:bottom-4 after:right-4 after:left-4 after:bg-cyan-500 after:blur-lg focus:ring-0 ${tap ? 'translate-y-2 shadow-inner after:opacity-20' : 'translate-y-0 after:opacity-0'}`}
        onClick={() => handleClick()}
      >
        {
          <span className={`transition text-xs uppercase py-0 px-3 rounded-lg relative z-10 ring-2 ${tap ? 'bg-cyan-500 text-white ring-cyan-500' : 'bg-white text-black ring-white'}`}>{keyPress}</span>
        }
      </motion.button>
      <div className="relative z-0 bg-gradient-to-t from-slate-200 via-slate-300 to-slate-200 h-4 mt-0 w-full -translate-y-2 rounded-b-lg border-b border-slate-300" />
    </motion.div>
  )
}

export default ButtonPad