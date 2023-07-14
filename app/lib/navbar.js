'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useEffect, useRef, useState } from 'react';

import HeaderPopover from './components/header-works-popover';

import { AiOutlinePicture, AiOutlineShareAlt, AiOutlinePlayCircle } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { BiSolidBookContent } from 'react-icons/bi';
import { TiWeatherPartlySunny } from 'react-icons/ti';

import { BsFillPlayCircleFill, BsFillPauseCircleFill  } from 'react-icons/bs';

import { BiSolidSkipNextCircle } from 'react-icons/bi'


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

const pages = [
  {name: "Home", path: "/home"},
  {name: "About", path: "/about"},
  {name: "Blog", path: "/blog"},
]

const popover_data = {
  name: "Works",
  items: [
    { name: 'Pictures I take', href: '/works/pictures', icon: AiOutlinePicture },
    { name: 'Gallery showcase', href: '/works/showcase', icon: MdWorkOutline },
    { name: 'Eductional Content I create', href: '/works/content', icon: BiSolidBookContent },
    { name: 'Ongoing projects', href: '/works/projects', icon: AiOutlineShareAlt }
  ]
}

export default function Navbar ({ cityname, temperature }) {
    let pathname = usePathname();

    return (
        <div className="header flex w-full h-fit py-6 relative">
            <motion.div variants={motionElements.container} initial="hidden" animate="show"
              className='flex justify-evenly container max-w-min mx-auto h-fit space-x-0 md:space-x-7 px-10 text-white text-lg'
            >
              {pages.map((page, i) => {
                return <Link href={page.path}><motion.div key={i} variants={motionElements.item} className={`${(pathname && pathname == page.path) && 'bg-emerald-300/10 ring-1 ring-gray-100/10'} px-4 md:px-6 py-1 rounded-full`}>{page.name}</motion.div></Link>
              })}
              <motion.div variants={motionElements.item} className='px-4 md:px-6 py-1 rounded-full'><HeaderPopover data={popover_data} /></motion.div>
            </motion.div>

            <AudioPanel />

            <WeatherInfo cityname={cityname} temperature={temperature} />
        </div>
    );
}

function AudioPanel () {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  let audio_name = "AC2 Ezio's family";

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <div className='w-fit h-fit hidden lg:flex justify-end absolute left-10 pr-8 transition-all'>
        <div className={`flex items-center space-x-3 w-fit rounded-full py-1 px-2 ${playing ? "pr-1" : "pr-4"} relative text-white text-lg text-right bg-white/10`}>
          {playing ? (
            <>
              <div className='flex space-x-1 items-center rounded-full'>
                <BsFillPauseCircleFill onClick={() => setPlaying(false)} className='w-5 h-5' />
                {/* <BiSolidSkipNextCircle className='w-6 h-6' /> */}
              </div>
              <p className='text-sm xl:text-base'>{audio_name}</p>
              <div className="playing">
                <span className="playing__bar playing__bar1"></span>
                <span className="playing__bar playing__bar2"></span>
                <span className="playing__bar playing__bar3"></span>
              </div>
            </>
          ) : (
            <>
              <div className='flex space-x-1 items-center rounded-full'>
                <BsFillPlayCircleFill onClick={() => setPlaying(true)} className='w-5 h-5' />
              </div>
              <p className='text-lg'>Play music</p>
            </>
          )}
          <audio ref={audioRef} src='/audio.mp3' />
        </div>
    </div>
  );
}

function WeatherInfo ({ cityname, temperature }) {
  return (
    <div className='w-fit h-fit hidden lg:flex justify-end absolute right-10 pr-8'>
        <div className='flex items-center space-x-2 w-fit rounded-2xl py-1 px-4 bg-white/10 relative text-white text-lg text-right'>
            <p>{cityname}, {temperature}°C</p>
            {/* <TiWeatherPartlySunny className='absolute inline-flex h-5 w-5 -top-2 -right-2' /> */}
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-200 opacity-75 -top-1 right-0"></span>
        </div>
    </div>
  );
}