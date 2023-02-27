import React, { useState } from 'react'
import Head from 'next/head';
import DrumPad from '@components/DrumPad';
import Header from '@components/Header';
import Instructions from '@components/Instructions';
import { motion } from 'framer-motion';
import Sidebar from '@components/Sidebar';

const Layout = ({ children}) => {

  const [open, setOpen] = useState(false)
  return (
    <div>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>Donut Drums</title>
        <meta name="title" content="Donut Drums"/>
        <meta name="description" content="A simple, tappable drum kit - an homage to the great J Dilla"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://donuts.ryanparag.com/"/>
        <meta property="og:title" content="Donut Drums"/>
        <meta property="og:description" content="A simple, tappable drum kit - an homage to the great J Dilla"/>
        <meta property="og:image" content="/sm.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://donuts.ryanparag.com/"/>
        <meta property="twitter:title" content="Donut Drums"/>
        <meta property="twitter:description" content="A simple, tappable drum kit - an homage to the great J Dilla"/>
        <meta property="twitter:image" content="/sm.png"/>
      </Head>
      <Sidebar open={open}/>
      <motion.div
        className={`transition relative w-full ${open ? '-translate-x-[320px]' : 'translate-x-0'}`}
      >
        <Header openSidebar={setOpen} sidebarState={open}/>
        { children }
      </motion.div>
    </div>
  )
}

export default Layout
