"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

import { AiFillGithub } from 'react-icons/ai';

  const text_container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  }

  const item_text = {
    hidden: { opacity: 0, transform: "translateX(-20px)" },
    show: { opacity: 1, transform: "translateX(0px)" }
  }

export default function About () {
    return (
      <div className='container w-full max-w-full min-h-[83.6vh] pt-7 pb-16 px-8 md:pt-20 lg:px-16 mx-auto'>
        <div className='container max-w-4xl mx-auto'>
            <div className='flex flex-col md:flex-row'>
                
                <motion.div variants={text_container} initial="hidden" animate="show" className='pt-4 w-full'>
                    <motion.h1 variants={item_text} className='mt-4 md:mt-0'>Hi there!</motion.h1>
                    <motion.h2 variants={item_text} className='mt-2'>I am shokirovw.</motion.h2>
                    <motion.p variants={item_text} className='text-content mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem distinctio doloribus sed recusandae. Ipsam, nostrum impedit, suscipit placeat nam repudiandae nulla fuga dolor magnam perspiciatis ea nesciunt error totam dolores! Consequuntur optio soluta tempore eaque minus. Eaque omnis, totam ex pariatur est impedit voluptatem veniam, cumque quasi alias voluptatum reiciendis doloremque molestiae dolor?</motion.p>
                </motion.div>
            </div>
            <div>
                <h1 className='mt-28'>Achievements</h1>
                <motion.p variants={item_text} className='text-content mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem distinctio doloribus sed recusandae. Ipsam, nostrum impedit, suscipit placeat nam repudiandae nulla fuga dolor magnam perspiciatis ea nesciunt error totam dolores! Consequuntur optio soluta tempore eaque minus. Eaque omnis, totam ex pariatur est impedit voluptatem veniam, cumque quasi alias voluptatum reiciendis doloremque molestiae dolor?</motion.p>
            </div>
            <motion.div className='transition-all px-6 py-4 text-[#94ffdd] mt-8 mb-8 bg-teal-700/50 rounded-lg flex justify-between hover:bg-teal-700/70 hover:text-[#b7ffe8]'>
                <p className='font-regular font-normal text-lg tracking-wide'>Research fan. Take a look at the process</p>
                <AiFillGithub className='inline transition-all w-5 h-5 md:w-8 md:h-8 hover:scale-125 hover:text-white/100' />
            </motion.div>
        </div>
    </div>
    );
}