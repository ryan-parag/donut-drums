import React, { useState } from 'react'
import ButtonPad from "@components/ButtonPad"
import {Howl, Howler} from 'howler';
import { motion } from 'framer-motion';
import { Bass, Kick, Snare, Hihat, Perc } from '@components/Icons';
import Sticker from '@components/Sticker';

const DrumPad = () => {

  const [active, setActive] = useState(null)

  const sounds = [
    {
      src: '21_Perc_1.mp3',
      key: 'q',
      name: 'Percussion',
      icon: <Perc/>
    }, {
      src: '22_Perc_2.mp3',
      key: 'w',
      name: 'Percussion',
      icon: <Perc/>
    }, {
      src: '23_Perc_3.mp3',
      key: 'e',
      name: 'Percussion',
      icon: <Perc/>
    }, {
      src: '24_Perc_4.mp3',
      key: 'r',
      name: 'Percussion',
      icon: <Perc/>
    }, {
      src: '12_Hihat_4.mp3',
      key: 'a',
      name: 'Hi-hat',
      icon: <Hihat/>
    }, {
      src: '14_Hihat_6.mp3',
      key: 's',
      name: 'Hi-hat',
      icon: <Hihat/>
    }, {
      src: '19_Snare_5.mp3',
      key: 'd',
      name: 'Snare',
      icon: <Snare/>
    }, {
      src: '17_Snare_3.mp3',
      key: 'f',
      name: 'Snare',
      icon: <Snare/>
    }, {
      src: '01_808_1.mp3',
      key: 'z',
      name: 'Bass',
      icon: <Bass/>
    }, {
      src: '02_808_2.mp3',
      key: 'x',
      name: 'Bass',
      icon: <Bass/>
    }, {
      src: '05_Kick_3.mp3',
      key: 'c',
      name: 'Kick',
      icon: <Kick/>
    }, {
      src: '06_Kick_4.mp3',
      key: 'v',
      name: 'Kick',
      icon: <Kick/>
    }
  ]

  const playSound = (source) => {

    const sound = new Howl({
      src: [`/audio/hiphop/${source.src}`],
    });
    
    setActive(source)
    sound.play()
    setTimeout(() => {
      setActive(null)
    }, 300)
  }

  return(
    <div className="w-96 flex flex-col relative ring-4 ring-slate-300 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200">
      <div className="w-full bg-slate-100 pt-5 p-3 rounded-md ring-2 ring-slate-200 relative z-10">
        <div className="grid grid-cols-4 w-full gap-2">
          <div className="w-full py-2 col-span-4 flex justify-center">
            <Sticker/>
          </div>
          <div className="bg-black col-span-4 mb-2 py-3 px-6 rounded-lg">
            <div className="w-full h-16 rounded-md bg-gradient-to-t from-cyan-900 via-cyan-800 to-cyan-900 text-xs text-cyan-400 p-3 font-mono relative after:content-['*'] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:z-10 after:from-black after:via-transparent after:to-black after:opacity-10 border-2 border-white border-opacity-5">
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
                      <span>Sample: {active.src}</span>
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
            </div>
          </div>
          {
            sounds.map((sound, i) => (
              <ButtonPad key={i} src={sound.src} keyPress={sound.key} play={() => playSound(sound)} />
            ))
          }
        </div>
      </div>
      <div className="h-10 bg-transparent rounded-b-lg transform -translate-y-2 bg-gradient-to-t from-transparent to-black opacity-5"/>
    </div>
  )
}

export default DrumPad