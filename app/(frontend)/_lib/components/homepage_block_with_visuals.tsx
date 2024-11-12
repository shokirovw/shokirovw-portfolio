'use client';

import { motion } from 'framer-motion';
import { FaBasketball, FaHeart } from "react-icons/fa6";

import { FaUserAstronaut } from "react-icons/fa6";
import { AiFillGithub } from 'react-icons/ai';
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import { useAmbienceControls } from '../scripts/ambienceControls';
import { FaGamepad } from 'react-icons/fa';
import P5Sketch from '../../(pages)/home/sketch_manifest';
import Image from 'next/image';
import pythonScreenshot from '../../../../public/python_screenshot.jpg'
import cpp2 from '../../../../public/cpp2.png'
import cpp3 from '../../../../public/cpp3.png'
import erkinov from '../../../../public/abdulloh_erkinov.png'
import gauss from '../../../../public/gauss.png'
import { CgPlayList } from "react-icons/cg";
import { PiAppWindowLight } from "react-icons/pi";
import '../../(pages)/home/style.css';
import { TbMath } from "react-icons/tb";
import { HiCodeBracketSquare } from "react-icons/hi2";
import js_img from "../../../../public/javascript_2.png"
import designer_img from "../../../../public/designer_edited.png"
import { BiSolidBookAlt } from "react-icons/bi";
import { FaPencilRuler } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import p5js_img from "../../../../public/p5js.png"
import Link from 'next/link';
import { useEffect, useState } from 'react';


let heading_anim = {
  initial: { transform: "translateY(60px)", opacity: 0 },
  animate: { transform: "translateY(0px)", opacity: 1 },
}


export default function HomepageBlockWithVisuals ({ likes }: { likes: number }) {
    const controls2 = useAmbienceControls();

    const [likePressed, setLikePressed] = useState(true);
    const [likeCount, setLikeCount] = useState(likes);

    const getScreenSize = (width) => {
      if (width > 1536) return "2xl";
      else if (width > 1280) return "xl";
      else if (width > 1024) return "lg";
      else if (width > 768) return "sm";
      else return "xs";
    }

    const [screenWidth, setScreenWidth] = useState({
      value: 0,
      name: ""
    });



    useEffect(() => {
      const handleResize = () => {
        setScreenWidth({
          value: window.innerWidth,
          name: getScreenSize(window.innerWidth)
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      let hasDevicePressed = localStorage.getItem("likePressed");

      if (hasDevicePressed) {
        setLikePressed(true);
      } else {
        setLikePressed(false);
      }
    }, []);

    const handleLikeClick = async () => {
      if (localStorage.getItem("likePressed")) {

      } else {
        setLikeCount(likeCount + 1);
        setLikePressed(true);
        localStorage.setItem("likePressed", "vrai");
        let senddata = await fetch("/api/addPlusOne?commit=vraie");

        console.log(senddata.json());
      }
    }

    let designer_block = (
      <div className='h-fit rounded-lg z-0 group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                  <Link href={"https://google.com"}><Image src={designer_img} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-indigo-300/10 group-hover:scale-[1.01] border-2 border-indigo-500/70' /></Link>
                  </div>
                  <div className='py-3 px-3'>
                    <div className='flex items-center gap-x-3 text-blue-300 text-base font-thin'><FaPencilRuler className='text-[15px]' /><p>Design Case Studies</p></div>
                    <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>Designer portfolio</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60'>Explore the collection</p></Link>
                  </div>
                </div>
    )

    

    return (
      <div className='w-full'>
        <div className='w-full px-8 lg:px-12 flex flex-col gap-y-7 lg:flex-row'>
          <div className='w-full lg:w-1/2 relative py-5 lg:py-24'>
              <motion.h4 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-2 lg:mb-4 text-emerald-200'>
                Hey! 👋 I am 
              </motion.h4>

              <motion.div animate={controls2} className='left-[260px] sm:left-[360px] md:left-[460px] lg:left-[400px] xl:left-[510px] 2xl:left-[630px] top-4 lg:top-16 absolute'>
                <FaGamepad className={`text-green-400/90 w-auto h-[65px] lg:h-[100px] xl:h-[120px] rotate-12`} />
              </motion.div>

              <div>
                <motion.h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl' {...heading_anim} transition={{ ease: "backOut" }}>
                  Muhammadiyor
                </motion.h1>
                <motion.h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl' {...heading_anim} transition={{ ease: "backOut" }}>
                  Shokirov
                </motion.h1>
              </div>
    
              <motion.p {...heading_anim} transition={{ ease: "backOut", delay: 0.2 }} className='text-base w-10/12 mt-2 sm:text-lg sm:w-full sm:mt-0 leading-relaxed text-paragraphc lg:text-2xl' style={{ "lineHeight": 1.6 }}>
                Mathematician and Computer Scientist with a love for clean code!
              </motion.p>

              <div className='w-full mt-4 md:mt-8 flex gap-x-4 md:gap-x-5 gap-y-4 flex-wrap items-center'>
                <motion.div onClick={() => { handleLikeClick(); }} className={'rounded-full shadow-lg transition-all cursor-pointer shadow-emerald-400 h-fit text-emerald-100 flex items-center gap-x-2.5 md:gap-x-3 py-2 px-5 w-fit' + (likePressed ? " bg-emerald-500/80" : " bg-emerald-600 hover:bg-emerald-500")}> 
                  <FaHeart className='md:w-5 md:h-5 w-3.5 h-3.5' />
                  <p className='text-sm md:text-base'>{likeCount}</p>
                </motion.div>
                <motion.div className='rounded-full h-fit group text-emerald-700 bg-emerald-200 flex items-center gap-x-3 py-1.5 md:py-2 px-5 w-fit'> 
                  <FaUserAstronaut className='w-6 h-6' />
                  <p className='group-hover:block hidden'>What's up?</p>
                </motion.div>
                <Link href={"https://github.com/shokirovw"} className='h-fit w-fit text-emerald-200  ml-2'>
                  <AiFillGithub className='w-8 h-8' />
                </Link>
                <Carousel style={{ boxShadow: "0px 0px 30px 6px #34d39945" }} className='rounded-full shadow-2xl shadow-emerald-300 select-none w-64 md:w-72 py-1 px-5 xl:ml-2 text-sm md:text-base text-emerald-700 bg-emerald-200' opts={{ loop: true }}>
                  <CarouselContent>
                    <CarouselItem><p className='w-fit truncate text-ellipsis'>Coming soon: the C++ Series!</p></CarouselItem>
                    <CarouselItem><p className='w-fit'>Check out new p5.js sample</p></CarouselItem>
                  </CarouselContent>
                  <CarouselNext className='bg-emerald-100 text-emerald-700 border-0 scale-90 md:scale-100' />
                </Carousel>
              </div>

          </div>
          <div className='w-full lg:w-1/2 flex text-emerald-100 relative justify-center lg:items-center xl:items-start lg:pl-11'>
              <P5Sketch />
          </div>              
        </div>
        <div className='footer w-full pb-14 mt-16 px-0'>
          <div className='relative z-10 mb-10'>
            <div className='bg-emerald-100/5 flex items-center gap-x-5 backdrop-blur-3xl opacity-100 text-xl lg:text-2xl text-emerald-200 rounded-full font-regular z-50 px-7 py-2 lg:px-10 lg:py-3 mx-auto w-fit'>
              <FaBasketball className='text-emerald-300 animate-bounce-fast' />
              <p>Select projects</p>
            </div>
            <div className='absolute w-full -z-10 h-px top-1/2 -translate-y-1/2 left-0 bg-white/20'></div>
          </div>
          <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl px-10 sm:px-4 mx-auto gap-8 -z-20'>
              <div className='grid gap-8 auto-rows-min'>
                
                <div className='h-fit rounded-lg z-0 group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                    <div className='absolute w-[96%] transition-all group-hover:-top-3 right-1/2 border border-emerald-600/30 translate-x-1/2 h-full bg-emerald-500/70 rounded-2xl -z-10 -top-1.5'></div>
                    <div className='absolute w-[92%] transition-all group-hover:-top-6 right-1/2 border border-emerald-600/30 translate-x-1/2 h-full bg-emerald-500/30 rounded-2xl -z-10 -top-3'></div>
                    <Link href={"https://google.com"}><Image src={pythonScreenshot} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-emerald-700/30 group-hover:scale-[1.01] border border-emerald-600/30' /></Link>
                    <div className='absolute right-3 bottom-3 bg-emerald-50/5 text-sm text-emerald-50/50 rounded-lg px-3 py-1.5'>12 lessons</div>
                  </div>
                  <div className='py-3 px-3'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin'><CgPlayList className='text-xl' /><p>Videoseries</p></div>
                    <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>Hands-on Python</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60 hover:text-emerald-50/50 cursor-pointer'>View full course</p></Link>
                  </div>
                </div>
                <div className='h-fit rounded-lg z-0 group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                  <Link href={"https://google.com"}><Image src={erkinov} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-emerald-700/30 group-hover:scale-[1.01] border border-emerald-600/30' /></Link>
                    <div className='absolute right-3 bottom-3 bg-transparent text-slate-50/95 backdrop-blur-3xl text-sm rounded-lg px-3 py-1.5'>Creative project</div>
                  </div>
                  <div className='py-3 px-3'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin'><PiAppWindowLight className='text-xl' /><p>Web Application</p></div>
                    <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>abdulloherkinov.uz</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60'>Visit the website</p></Link>
                  </div>
                </div>
                <div className='h-fit w-full flex gap-x-5 sm:gap-x-2 lg:gap-x-5 px-2 py-2 border-2 border-emerald-400/30 rounded-3xl'>
                  <div className='w-1/2 h-fit hover:bg-emerald-500/20 rounded-3xl p-4 bg-emerald-500/10'>
                    <div className=''>
                      <div className='flex items-center gap-x-2 text-emerald-500 text-base sm:text-sm lg:text-base'><IoLibrary className='text-sm' /><p>Library</p></div>
                      <p className='text-emerald-50 text-xl sm:text-base lg:text-xl mt-0.5 mb-2.5'>PHP Express</p>
                      <Link href={"https://google.com"}><p className='text-emerald-50/60 text-sm lg:text-base'>Open repository</p></Link>
                    </div>
                  </div>
                  <div className='w-1/2 h-fit rounded-3xl hover:bg-emerald-500/20 p-4 bg-emerald-500/10'>
                    <div className=''>
                      <div className='flex items-center gap-x-2 text-emerald-500 text-base sm:text-sm'><p>Browser Extenstion</p></div>
                      <p className='text-emerald-50 text-xl sm:text-base lg:text-xl mt-0.5 mb-2.5'>CloseConnect</p>
                      <Link href={"https://google.com"}><p className='text-emerald-50/60 text-sm lg:text-base'>Open repository</p></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid gap-8 auto-rows-min'>
              <div className='h-fit rounded-lg z-0 group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                  <Link href={"https://google.com"}><Image src={cpp2} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-emerald-700/30 group-hover:scale-[1.01] border border-emerald-600/30' /></Link>
                    <div className='absolute right-3 bottom-3 bg-emerald-50/5 backdrop-blur-lg text-sm text-emerald-50/60 rounded-lg px-3 py-1.5'>Released soon</div>
                  </div>
                  <div className='py-3 px-3'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin'><CgPlayList className='text-xl' /><p>Videoseries</p></div>
                    <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>Fundamentals of C++</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60'>View the first lesson</p></Link>
                  </div>
                </div>
                <div className='h-fit rounded-2xl z-0 transition-all group border-2 border-emerald-300/20 hover:from-emerald-600/20 hover:to-emerald-600/60 bg-gradient-to-bl from-emerald-600/20 to-emerald-600/50'>
                  <div className='py-4 px-4'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin mb-1'><HiCodeBracketSquare className='text-xl' /><p>Code Tutorials · 10 modules</p></div>
                      <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>Design Patterns in C++</p>
                      <Link href={"https://google.com"} className='w-fit'><p className='text-emerald-50/60 w-fit'>View full course</p></Link>
                  </div>
                </div>
                <div className='h-fit w-full flex gap-x-5 border-emerald-400/30 rounded-3xl'>
                  <div className='flex-1 h-fit rounded-3xl group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                    <Image src={js_img} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-emerald-700/30 group-hover:scale-[1.01] border border-emerald-600/30' />
                    <div className='absolute right-3 bottom-3 bg-emerald-50/5 backdrop-blur-lg text-xs text-emerald-50/60 rounded-lg px-1.5 py-0.5'>19 modules</div>
                  </div>
                  <div className='py-3 px-3'>
                    <p className='text-emerald-50 text-lg mb-2'>NodeJS Reference</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60 text-sm'>View full reference</p></Link>
                  </div>
                  </div>
                  <div className='flex-1 h-fit rounded-3xl border-emerald-500/70 p-7 py-6 bg-emerald-500/10 hover:bg-emerald-500/20'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin'><BiSolidBookAlt className='text-sm' /><p>Reference</p></div>
                    <p className='text-emerald-50 text-xl leading-snug mt-0.5 mb-2.5'>Advanced Javascript</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60 text-base'>Open reference folder</p></Link>
                  </div>
                </div>
                <div className='h-fit rounded-lg z-0 group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                  <Link href={"https://google.com"}><Image src={p5js_img} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-emerald-700/30 group-hover:scale-[1.01] border border-emerald-600/30' /></Link>
                    <div className='absolute right-3 bottom-3 bg-transparent text-slate-50/95 backdrop-blur-3xl text-sm rounded-lg px-3 py-1.5'>Creative project</div>
                  </div>
                  <div className='py-3 px-3'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin'><PiAppWindowLight className='text-xl' /><p>Computer Graphics</p></div>
                    <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>P5.JS samples</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60'>View the works</p></Link>
                  </div>
                </div>
                { (screenWidth.value > 640 && screenWidth.value < 1024) && designer_block }
              </div>
              <div className="grid gap-8 auto-rows-min mt-0 sm:-mt-[440px] md:-mt-[500px] lg:mt-0">
                <div className='h-fit rounded-lg z-0 group'>
                  <div className='relative z-0 hover:cursor-pointer'>
                    <div className='absolute w-[96%] transition-all group-hover:-top-3 right-1/2 border border-amber-600/30 translate-x-1/2 h-full bg-amber-500/70 rounded-2xl -z-10 -top-1.5'></div>
                    <div className='absolute w-[92%] transition-all group-hover:-top-6 right-1/2 border border-amber-600/30 translate-x-1/2 h-full bg-amber-500/30 rounded-2xl -z-10 -top-3'></div>
                    <Link href={"https://google.com"}><Image src={gauss} alt='' className='rounded-2xl z-30 transition-all group-hover:shadow-lg group-hover:shadow-emerald-700/30 group-hover:scale-[1.01]' /></Link>
                    <div className='absolute right-3 bottom-3 bg-transparent text-slate-50/95 backdrop-blur-3xl text-sm rounded-lg px-3 py-1.5'>10 Lessons</div>
                  </div>
                  <div className='py-3 px-3'>
                    <div className='flex items-center gap-x-2 text-emerald-500 text-base font-thin'><TbMath className='text-xl' /><p>Tutorials</p></div>
                    <p className='text-emerald-50 text-xl mt-0.5 mb-2.5'>Math Videos & Presentations</p>
                    <Link href={"https://google.com"}><p className='text-emerald-50/60'>View resources</p></Link>
                  </div>
                </div>
                { !(screenWidth.value > 640 && screenWidth.value < 1024) && designer_block }
              </div>
          </div>
        </div>
      </div>
    );
}


/*
  What things I want to include:
    1. Python Series (Opeanable)
    2. C++ series demo (Custom youtube video player)
    3. 
*/