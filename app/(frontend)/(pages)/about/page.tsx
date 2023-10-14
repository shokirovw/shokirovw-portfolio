"use client";

import Image from 'next/image';
import StandartPageLayout from '../../_lib/components/StandartPageTopLayout';
import CustomCard from '../../_lib/components/CardWithPictureAndActions';
import { IconName, getIcon } from '../../_lib/components/ClientIcons';

import { motion } from 'framer-motion';
import React from 'react';

function Heading ({ children }) {
  return <h1>{children}</h1>
}

function Subheading ({ children }) {
  return <h2>{children}</h2>
}

function ContentText ({ children }) {
  return <p className='contentp'>{children}</p>
}

function StandartGrid ({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {children}
    </div>
  )
}

function Br ({ mode = 1 }: { mode?: 0 | 1 | 2 }) {
  if (mode == 0) return <></>;
  else if (mode == 1) return <br />;
  else return <><br /><br /></>;
}

function WrapSpacingAround ({ children, spacingMode = 1 } : {
  children: JSX.Element | JSX.Element[]; spacingMode?: 0 | 1 | 2;
}) {
  return <><Br mode={spacingMode} />{children}<Br mode={spacingMode} /></>
}



function BatchText ({ text }) {
    return (
        <div className="h-fit w-fit py-1 px-3 ring-2 whiten ring-emerald-600/80 rounded-3xl bg-emerald-700/95 hover:bg-emerald-700/80 hover:ring-emerald-500/80 transition-all">{text}</div>
    );
}



function AnimatedMasonryImageGrid () {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <AnimateElem ix={-100} className='row-span-1 col-span-1 md:row-span-2 md:col-span-2 max-h-96'>
          <div className="aspect-square md:aspect-auto md:h-full">
            <Image priority={true} src={"/me.jpg"} width={1000} height={1000} alt="" className='transition-all w-full h-full rounded-xl object-cover' style={{ objectPosition: "50% 22%" }}  />
          </div>
      </AnimateElem>
      <AnimateElem iy={-100} className='row-span-1 col-span-1 md:row-span-1 md:col-span-2'>
          <div className="aspect-square md:aspect-auto md:h-full">
            <Image priority={true} src={"/uzb1.jpg"} width={400} height={245} alt="" className='transition-all w-full h-full rounded-xl object-cover' style={{ objectPosition: "50% 22%" }}  />
          </div>
      </AnimateElem>
      <AnimateElem iy={70} className="row-span-1 col-span-1 md:row-span-1 md:col-span-1">
          <div className="aspect-square md:aspect-auto md:h-full">
            <Image priority={true} src={"/uzb2.png"} width={300} height={200} alt="" className='transition-all w-full h-full rounded-xl object-cover' style={{ objectPosition: "50% 22%" }}  />
          </div>
      </AnimateElem>
      <AnimateElem ix={70} className='row-span-1 col-span-1 md:row-span-1 md:col-span-1'>
          <div className="aspect-square md:aspect-auto md:h-full">
            <Image priority={true} src={"/uzb3.jpeg"} width={300} height={200} alt="" className='transition-all w-full h-full rounded-xl object-cover' style={{ objectPosition: "50% 22%" }}  />
          </div>
      </AnimateElem>
    </div>
  );
}

function EducationSection () {
    return (
        <>
            <Br />
            <Subheading>Education</Subheading>
            <Br />
            <StandartGrid>
                <CustomCard heading={"IELTS"} subheading={"10 September 2022"} 
                    pictureSrc={"/ielts_logo.jpg"} 
                    text={"Overall band 8.0 (Listening: 9.0, Reading: 8.5, Writing: 6.5, Speaking: 7.5)"} 
                    actions={[
                        {buttonType: true, iconname: "Download", text: "Download certificate", action: "/ielts.jpg"}
                    ]} 
                />
                <CustomCard heading={"Muhammad Al-Khwarizmi School"} subheading={"2018-2023 years"} 
                    pictureSrc={"/ictschool.png"} 
                    text={"Mostly studied mathematics and computer science, had a majestic time with friends"} 
                    actions={[
                        {text: "See website", action: "https://ictschool.uz/"}
                    ]} 
                />
                <CustomCard heading={"New Uzbekistan University"} subheading={"2023-present"} 
                    pictureSrc={"/newuu.jpg"} 
                    text={"Bachelor's of Economics and Data Science, Applied Math as an additional course"} 
                    actions={[
                        {text: "See website", action: "https://newuu.uz"}
                    ]} 
                />
            </StandartGrid>
        </>
    );
}

function ProjectsSection () {
    return (
        <>
            <Br />
            <Subheading>Projects</Subheading>
            <Br />
            <StandartGrid>
                <CustomCard heading={"Shokirov's channel"} subheading={"Youtube channel (since 2023)"} 
                    pictureSrc={"/me.jpg"} picturePos='50% 22%' 
                    text={"I create videos based on the stack of math and cs. Try to present ideas in simple and artistic way"} 
                    actions={[
                        {buttonType: true, iconname: "Youtube", text: "See channel", action: "https://youtube.com/@shokirovs_cloud"}
                    ]} 
                />
                <CustomCard heading={"Uzbekistan photos"} subheading={"Gallery website"} 
                    pictureSrc={"/uzb1.jpg"} 
                    text={"Best shots of the best country, Uzbekistan."} 
                    actions={[
                        {buttonType: true, iconname: "Picture", text: "View gallery", action: "https://google.com"},
                        {text: "Subscribe", action: "https://google.com"}
                    ]} 
                />
                <CustomCard heading={"JS Simulations"} subheading={"Diversity of simulations using Javascript"} 
                    pictureSrc={"/jslogo.png"} roundFull={false}
                    text={"Both natural and imaginary phenomenons visualised in JS"} 
                    actions={[
                        {buttonType: true, text: "View gallery", iconname: "Picture", action: "https://google.com"}
                    ]} 
                />
                <CustomCard heading={"Pexpress framework"} subheading={"Express-like framework written in PHP"}
                    text={"Inspired by the ubiquiteoness of PHP and ease of Express-js"} 
                    actions={[
                        {buttonType: true, text: "Open docs", iconname: "Book", action: "https://google.com"},
                        {text: "Github", action: "https://github.com/shokirovw"}
                    ]} 
                />
                <CustomCard heading={"Instaclipper"} subheading={"Instagram-account clip creator"}
                    text={"Create high-quality clip from instagram account content"} 
                    actions={[
                        {buttonType: true, text: "View in action", iconname: "Flash", action: "https://google.com"},
                        {text: "Github", action: "https://github.com/shokirovw"}
                    ]} 
                />
            </StandartGrid>
        </>
    )
}

function Noteblock ({ action, iconname, text, colorstyle = "emerald" }: { action: string; iconname: IconName; text: string, colorstyle?: "emerald" | "teal" }) {
  let Icon = getIcon(iconname);

  return (
    <a href={action}>
        <div className={`transition-all px-6 py-4 text-[#94ffdd] bg-emerald-700/60 rounded-lg flex justify-between hover:bg-teal-700/50 hover:text-[#b7ffe8]`}>
            <p className='font-regular font-normal text-lg tracking-wide'>{text}</p>
            <Icon className='inline transition-all w-4 h-4 md:w-8 md:h-8 hover:scale-110 hover:text-white/100' />
        </div>
    </a>
  );
}

export default function About () {
    return (
        <StandartPageLayout>
            <ActivateAnimations>


              <AnimateStack ix={-20}>
                <Heading>Hi there!</Heading>
                <Subheading>I am shokirovw.</Subheading>
                <ContentText>I'm a frontend developer, optimist, and community builder. I currently work as the VP of Developer Experience at Vercel, where I lead the community for Next.js, an open-source web framework built with React.</ContentText>
              </AnimateStack>


              <WrapSpacingAround>
                <AnimatedMasonryImageGrid />
              </WrapSpacingAround>


              <AnimateStack iy={40} spacing={{ mode: 1, disableLast: true }}>
                <ContentText>I create educational content for developers, teaching them about web development, JavaScript and TypeScript, React and Next.js, and more. This comes in all forms: blog posts, videos, tweets, conference talks, and workshops. You can watch some of my favorites below.</ContentText>
                <Noteblock action='https://google.com' iconname='Picture' text='Find out more Uzbekistan pics in here' />
                <EducationSection />
                <ProjectsSection />
                <Noteblock action='/resume.pdf' iconname='Paperclip' text='You can download resume in here' colorstyle='teal' />
              </AnimateStack>


            </ActivateAnimations>
        </StandartPageLayout>
    );
}

/* <h2 className=''>Some fancy list </h2>
            <br />
            <div className='flex flex-row flex-wrap gap-x-4 gap-y-5'>
                <BatchText text={"C/C++"} />
                <BatchText text={"OpenGL / DirectX / Vulkan"} />
                <BatchText text={"Mathematics"} />
                <BatchText text={"Algorithms and Data Structures"} />
                <BatchText text={"Designs/visuals"} />
            </div>
            <br /><br /> */

function ActivateAnimations ({ children }) {
  return (
    <motion.div variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0
        }
      }
    }} initial="hidden" animate="show">
      {children}
    </motion.div>
  )
}

function AnimateElem ({ children = <></>, ix = 0, iy = 0, className = "" }: {
  children?: JSX.Element | JSX.Element[], ix?: number; iy?: number; className?: string;
}) {
  return (
    <motion.div className={className} variants={{
      hidden: { opacity: 0, transform: `translate(${ix}px, ${iy}px)` }, 
      show: { opacity: 1, transform: "translate(0px, 0px)" }
    }}>
      {children}
    </motion.div>
  )
}

function AnimateStack ({ children, ix = 0, iy = 0, spacing = { mode: 0, disableLast: true } }: {
  children?: JSX.Element[], ix?: number; iy?: number; spacing?: { mode: 0 | 1 | 2, disableLast: boolean; }
}) {
  let spacingElem = <Br mode={spacing.mode} />;

  let i = 0;

  return React.Children.map(children, child => {
      return <>
        <AnimateElem ix={ix} iy={iy}>{child}</AnimateElem>
        {(spacing.disableLast && i++ != children.length - 1) && spacingElem}
      </>
  })
}