'use client';
import Image from 'next/image';
import img from "../../../favicon.ico"
import { FaItunesNote } from "react-icons/fa6";
import { TbMath } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { SiApplearcade } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";
import StandartFooter from "../../_lib/components/standart_footer";
import { getPersonalInformationObject } from "../../_lib/scripts/PersonalInfoCreator";
import { getSocialMediaComponentsJSX } from "../../_lib/scripts/SocialMediaComponentsReady";
import { useEffect, useState } from 'react';

// export default async function Footer () {
//     const SocialMediaDesigner = await getSocialMediaComponentsJSX();
//     const user_name = (await getPersonalInformationObject()).getFullName();
//     const current_year = new Date().getFullYear();

//     return <StandartFooter 
//         text={`© ${current_year} ${user_name} `} 
//         extended_block={<SocialMediaDesigner.IconsArrangedInRow />} 
//     />
// }

export default function Footer () {

  const [screenWidth, setScreenWidth] = useState(0);



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className='w-full container max-w-7xl px-6 mx-auto mt-16 md:mt-0 pb-20'>
            <div className='space-y-6 relative'>
              <div className='flex items-center w-full gap-x-8'>
                  <div className='flex gap-x-3.5 md:gap-x-5 items-start'>
                    <div>
                      <Image src={img} alt='' className='w-7 md:w-9 h-auto mt-2' />
                    </div>
                    <div className='text-left font-regular'>
                        <p className='text-lg md:text-xl md:mb-2 text-[#aafbf1]'>Shokirov Muhammadiyor</p>
                        <div className='flex items-center gap-x-2.5'>
                          <div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#57e8da] animate-pulse'></div>
                          <p className='text-[#6fcbc0] text-sm md:text-base'>All systems operational</p>
                        </div>  
                    </div>
                  </div>
                <div className='relative z-10 flex-grow'>
                  {screenWidth > 640 && (<div className='bg-emerald-600 absolute top-1/2 -translate-y-1/2 left-[30%] opacity-100 z-50 text-white px-3 text-sm md:text-base rounded-full w-fit'>Contact me</div>)}
                  <div className='absolute w-full -z-10 h-px top-1/2 -translate-y-1/2 left-0 bg-white/20'></div>
                  <TbMath className='hidden md:block absolute backdrop-blur-sm px-3 box-content right-[20%] top-1/2 -translate-y-1/2 text-3xl  text-teal-300' />
                </div>
              </div>
              <div className='relative z-10 py-4'>
                <div className='bg-[#0fc4b0] text-white px-3 right-1/4 absolute top-1/2 -translate-y-1/2 text-sm md:text-base  rounded-full w-fit z-50'>Github</div>
                <div className='absolute w-full h-px top-1/2 -translate-y-1/2 left-0 bg-white/20 -z-10'></div>
                <FaItunesNote className='absolute text-2xl backdrop-blur-sm px-3 box-content left-[20%] top-1/2 -translate-y-1/2 text-teal-300' />
                { screenWidth < 768 && (<IoAirplane className='absolute text-2xl backdrop-blur-sm px-3 box-content right-[5%] top-1/2 -translate-y-1/2 text-teal-300' />) }
                
              </div>
              <div className='relative z-10 py-4'>
                <div className='bg-sky-600 text-white px-3 left-1/4 absolute top-1/2 -translate-y-1/2 text-sm md:text-base  rounded-full w-fit z-50'>{screenWidth <= 640 ? "Contact" : "0x74517910"}</div>
                <div className='absolute w-full h-px top-1/2 -translate-y-1/2 left-0 bg-white/20 -z-10'></div>
                <FaStar className='absolute text-2xl backdrop-blur-sm px-3 box-content left-[5%] top-1/2 -translate-y-1/2 text-teal-300' />
                <SiApplearcade className='absolute text-2xl backdrop-blur-sm px-3 box-content right-[25%] md:left-[50%] top-1/2 -translate-y-1/2 text-teal-300' />
                { screenWidth >= 768 && (<IoAirplane className='absolute text-2xl backdrop-blur-sm px-3 box-content right-[5%] top-1/2 -translate-y-1/2 text-teal-300' />) }
              </div>
            </div>
            
        </div>
    );
}



