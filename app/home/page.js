'use client';

import { motion } from 'framer-motion';
import HomeVisuals from './home_visuals';
import SocialLinksPanel from './social_links_panel';

let heading_anim = {
  initial: { transform: "translateY(60px)", opacity: 0 },
  animate: { transform: "translateY(0px)", opacity: 1 },
}

export default function ClientPage() {
  return (
    <div className='flex grow items-center justify-center'>
        <div className='container text-center p-12 relative max-w-7xl'>
          <HomeVisuals />

          <motion.h2 {...heading_anim} transition={{ ease: "backOut" }} className='text-4xl sm:text-5xl lg:text-8xl text-center'>
            Shokirov Muhammadiyor
          </motion.h2>

          <motion.p {...heading_anim} transition={{ ease: "backOut", delay: 0.2 }} className='text-green-50/80 text-lg lg:text-2xl mt-6'>
            Product Designer / Webflow Developer / Framer Developer and Partner. Currently working full-time as a Senior Product Designer at Detail Technologies
          </motion.p>
          
          <SocialLinksPanel />
        </div>
      </div>
  )
}

