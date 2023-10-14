'use client';

import { motion } from 'framer-motion';
import HomeVisuals from './stunning_visuals';

let heading_anim = {
  initial: { transform: "translateY(60px)", opacity: 0 },
  animate: { transform: "translateY(0px)", opacity: 1 },
}

export default function HomepageBlockWithVisuals ({ heading, description, extended_block }: {
    heading: string; description: string; extended_block: JSX.Element
}) {
    return (
        <div className='flex grow items-center justify-center'>
            <div className='container max-w-7xl text-center p-12 relative'>
              <HomeVisuals />
    
              <motion.h1 className='text-center' {...heading_anim} transition={{ ease: "backOut" }}>
                {heading}
              </motion.h1>
    
              <motion.p {...heading_anim} transition={{ ease: "backOut", delay: 0.2 }} className='text-lg lg:text-2xl mt-6'>
                {description}
              </motion.p>
              <div className='mt-10'>
                { extended_block }
              </div>
            </div>
        </div>
      )
}