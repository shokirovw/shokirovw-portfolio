'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderPopover from '@/lib/components/header-works-popover';
import { IconName } from './ClientIcons';

export type NavigationbarCompInterface = {
    name: string; path: `/${string}` | ''; iconname?: IconName | ''; elements?: NavigationbarCompInterface[];
}

const motionElements = {
  nav_container: {
    hidden: { opacity: 0 },
    show: {opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5}}
  },

  nav_item: {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 }
  }
}

export default function NavigationBarComponent ({ current_pathname, items_data }: { current_pathname: string; items_data: NavigationbarCompInterface[] }) {
    function highlightCurrentPage (path: string) {
      if (current_pathname == path) return 'bg-emerald-300/10 ring-1 ring-gray-100/10'
      else return ''
    }

    return (
        <motion.div variants={motionElements.nav_container} initial="hidden" animate="show"
          className='flex justify-evenly mx-auto container max-w-min h-fit space-x-0 md:space-x-7 px-10 text-white text-lg'
        >
            {items_data.map((item, i) => {
                let inner_comp;

                if (item.elements) {
                    inner_comp = <HeaderPopover group_data={item}  />
                } else {
                    inner_comp = item.name;
                }

                return (
                    <Link href={item.path} key={i} prefetch>
                        <motion.div variants={motionElements.nav_item} className={`${highlightCurrentPage(item.path)} px-4 md:px-6 py-1 rounded-full`}>
                            { inner_comp }
                        </motion.div>
                    </Link>
                )
            })}

        
      </motion.div>
    );
}



