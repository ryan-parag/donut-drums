import React, { useState } from 'react'
import ButtonPad from "@components/ButtonPad"
import {Howl, Howler} from 'howler';
import { motion } from 'framer-motion';
import Sticker from '@components/Sticker';
import { HipHop, CasioPT30, RealDrums, TrapDrums } from '@components/Sounds';
import Switch from '@components/Switch';

const truncate = (str, length) => {
  return (str.length > length) ? str.slice(0, length - 1) + '…' : str;
}

const DrumPad = () => {

  const [active, setActive] = useState(null)
  const [activeSounds, setActiveSounds] = useState(HipHop)

  const playSound = (source) => {
    const sound = new Howl({
      src: [`/audio/${source.src}`],
    });
    
    setActive(source)
    sound.play()
    setTimeout(() => {
      setActive(null)
    }, 300)
  }

  const click = (active) => {
    const sound = new Howl({
      src: [`/audio/click.mp3`],
    });
    sound.play()
    setActiveSounds(active)
  }

  const sounds = [
    { name: 'Beats', sounds: HipHop, keypress: '1' },
    { name: 'Casio', sounds: CasioPT30, keypress: '2' },
    { name: 'Real', sounds: RealDrums, keypress: '3' },
    { name: 'Trap', sounds: TrapDrums, keypress: '4' }
  ]

  return(
    <div className="w-96 flex flex-col relative ring-4 ring-slate-300 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 shadow-xl">
      <div className="w-full bg-slate-100 pt-5 p-3 rounded-md ring-2 ring-slate-200 relative z-10">
        <div className="grid grid-cols-4 w-full gap-2">
          <div className="w-full py-2 col-span-4 flex justify-center">
            <Sticker/>
          </div>
          <div className="bg-black col-span-4 mb-2 py-3 px-6 rounded-lg border-4 border-white border-opacity-20 ring-2 ring-slate-300">
            <motion.div
              className="w-full transition opacity-0 h-16 rounded-md bg-gradient-to-t from-cyan-900 via-cyan-800 to-cyan-900 text-xs text-cyan-400 p-3 font-mono relative after:content-['*'] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:z-10 after:from-black after:via-transparent after:to-black after:opacity-10 border-2 border-white border-opacity-5"
              animate={{ opacity: [0, 0.5, 0.3, 0.7, 0.6, 1] }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div
                className="absolute top-0 bottom-0 right-0 left-0 bg-red-500 rounded-lg z-10"
                style={{
                  backgroundSize: '5px auto',
                  mixBlendMode: 'overlay',
                  backgroundImage: 'url(/textures/lines.jpeg)',
                  opacity: 0.1
                }}
              />
              {
                active !== null ? (
                  <div
                    className="flex items-center"
                  >
                    <div className="h-7 w-7">
                      {active.icon}
                    </div>
                    <div className="flex flex-col flex-1 pl-2">
                      <span>{active.name}</span>
                      <span className="truncate">Sample: {truncate(active.src, 26)}</span>
                    </div>
                  </div>
                )
                :
                (
                  <>
                    <motion.div
                      className="h-3.5 w-1.5 bg-cyan-600 opacity-0"
                      animate={{ opacity: [0,1,0] }}
                      transition={{ duration: 0.8, type: "spring", stiffness: 100, repeat: Infinity }}
                    />
                  </>
                )
              }
            </motion.div>
          </div>
          <div className="col-span-4 px-2 pt-2 pb-0 bg-slate-600 rounded-md grid grid-cols-4 gap-2">
            {
              sounds.map((item,i) => (
                <Switch
                  item={item}
                  key={i}
                  keyPress={item.keypress}
                  play={() => click(item.sounds)}
                  active={activeSounds == item.sounds}
                />
              ))
            }
          </div>
          {
            activeSounds.map((sound, i) => (
              <ButtonPad key={i} src={sound.src} keyPress={sound.key} play={() => playSound(sound)} delay={i} />
            ))
          }
        </div>
      </div>
      <div className="h-10 bg-transparent rounded-b-lg transform -translate-y-2 bg-gradient-to-t from-transparent to-black opacity-5"/>
    </div>
  )
}

export default DrumPad