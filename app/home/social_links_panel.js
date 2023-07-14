import generateSocialLinks from '../lib/socialLinks';

import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 }
}
  
export default function SocialLinksPanel () {
    return (
      <motion.div variants={container} animate="show" initial="hidden" className='flex w-fit text-white/80 text-lg font-regular space-x-10 mx-auto mt-10'>
          {generateSocialLinks((link, i) => {
            return (
              <motion.div key={i} variants={item} className='w-fit h-fit'>
                <Link href={link.href}>
                  <link.icon className='transition-all w-8 h-8 hover:scale-125 hover:text-white/100' />
                </Link>
              </motion.div>
            );
          })}
      </motion.div>
    );
  }