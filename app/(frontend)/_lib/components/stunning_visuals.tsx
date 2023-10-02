import { FaGamepad, FaStar, FaBasketballBall } from 'react-icons/fa';
import { motion } from 'framer-motion';

let visuals = [
    {
      initial: { x: 30, y: -30 },
      dragConstraints: 0.1,
      containerClassname: 'absolute hidden 2xl:w-32 2xl:h-32 2xl:-right-28 2xl:-top-20 2xl:block',
      icon: FaGamepad,
      iconClassname: 'rotate-[26deg]'
    },
    {
      initial: { x: -30, y: -10 },
      dragConstraints: 1,
      containerClassname: 'absolute w-12 h-12 right-[100] top-80 sm:right-6 sm:-top-5 block md:right-24 md:-top-8 md:block xl:w-12 xl:h-12 xl:right-12 xl:top-0 xl:block',
      icon: FaBasketballBall,
      iconClassname: ''
    },
    {
      initial: { x: -30, y: 30 },
      dragConstraints: 15,
      containerClassname: 'absolute hidden sm:w-12 sm:h-12 sm:left-8 sm:-bottom-8  sm:block md:w-20 md:h-20 md:left-12 md:-bottom-10 md:block lg:w-28 lg:h-28 lg:left-8 lg:-bottom-10 lg:block 2xl:w-36 2xl:h-36 2xl:-left-28 2xl:-bottom-10 2xl:block',
      icon: FaStar,
      iconClassname: 'rotate-[26deg]'
    }
  ]

export default function HomeVisuals () {
    return (
        <>
            {visuals.map((visual, i) => {
                let n = visual.dragConstraints;
                return (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0, ...visual.initial }} 
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} 
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }} 
                    drag dragConstraints={{ top: -n, left: -n, right: n, bottom: n }} 
                    className={visual.containerClassname}
                >
                    <visual.icon className={`text-green-400/90 w-full h-full ${visual.iconClassname}`} />
                </motion.div>
                );
            })}
        </>
    )
}