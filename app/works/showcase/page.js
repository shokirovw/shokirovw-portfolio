'use client';

import HeaderDescriptionLayout from "@/app/lib/HeaderDescriptionLayout";

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import { SiNextdotjs } from 'react-icons/si';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ImageComponent ({ str }) {
  return (
      <Image src={`/${str}.jpg`} width={1200} height={750} className='transition-all w-full h-full object-cover' style={{ objectPosition: "50% 22%" }}  />
  );
}

export default function App() {
  const aaa = useRef();

  let [sliderprops, setSliderprops] = useState("horizontal");
  let [perpage, setPerPage] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSliderprops("vertical");
    }

    if (window.innerWidth < 730) {
      setPerPage(1);
    }

    function updateSize (e) {
      let w = e.currentTarget.innerWidth;

      if (w < 730 && perpage != 1) {
        setPerPage(1);
      } else if (w > 730 && perpage != 2) {
        console.log("Setting perpage2", perpage);
        setPerPage(2);
      }

      if (w > 1024 && sliderprops != "horizontal") {
        setSliderprops("horizontal")
      } else if (w < 1024 && sliderprops != "vertical") {
        setSliderprops("vertical");
      }
    }
    
    window.addEventListener('resize', updateSize);
  });

  return (
    <HeaderDescriptionLayout maxw="5" header={"Showcase"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, repudiandae debitis. Aspernatur, omnis sapiente alias veniam obcaecati dicta earum ab nemo autem quis dolor asperiores."}>
      <div className="w-full h-fit rounded-xl overflow-hidden ring-2 ring-emerald-600">
        <Splide ref={aaa} aria-label="My Favorite Images" options={{ drag: 'free', snap: true, height: (sliderprops == "horizontal" ? 400 : 600 ), speed: 800 }}>
          <SplideSlide>
            <div className="flex flex-col lg:flex-row w-full h-full bg-emerald-700">
              <div className="w-full lg:w-5/12 lg:h-full lg:overflow-y-scroll bg-emerald-100/40 rounded-tr-md rounded-br-md p-3 scrollbar-thin scrollbar-thumb-white/50 scrollbar-thumb-rounded-full transition-all hover:scrollbar-thumb-white/80">
                {sliderprops == "vertical" ? (
                  <Splide options={{ height: 220, perPage: perpage, padding: 2 }}>
                    <SplideSlide>
                      <div className="h-full w-auto rounded-xl overflow-hidden mx-2">
                        <ImageComponent str={"pic"} />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="h-full w-auto rounded-xl overflow-hidden mx-2">
                        <ImageComponent str={"pic"} />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="h-full w-auto rounded-xl overflow-hidden mx-2">
                        <ImageComponent str={"pic"} />
                      </div>
                    </SplideSlide>  
                  </Splide>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <ImageComponent str={"pic"} />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-7/12 lg:h-full p-5 relative overflow-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-thumb-rounded-full transition-all hover:scrollbar-thumb-white/80">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-emerald-200 mt-3 rotate-90 absolute right-0 top-10">#001</h1>
                <div className="w-10/12">
                  <div className="flex justify-between flex-wrap items-center">
                    <p className="uppercase text-white/70 text-xs md:text-sm tracking-wider">Animation</p>
                    <div className="flex gap-x-5 flex-wrap">
                      <a href="" className="text-sm text-green-400/90 underline">See live</a>
                      <a href="" className="text-sm text-green-400/90">View on Github</a>
                    </div>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl text-emerald-200 mt-3">Glyph typewriter also something to fill the screen to avoid</h1>
                  <p className="text-content text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam enim, expedita praesentium, necessitatibus voluptatibus neque obcaecati labore nesciunt, corrupti voluptatem hic voluptates magni ea autem perspiciatis ducimus modi. Officia voluptatum obcaecati sed aliquam dignissimos nam doloribus ipsa perferendis facere ut possimus laborum accusantium, explicabo accusamus sit, alias modi provident voluptatem ex! Quam dolorem ipsum, rerum inventore, voluptate commodi error aspernatur sunt, officia praesentium consectetur sed laborum blanditiis. Iusto impedit dolorum quidem adipisci atque incidunt eius ipsum, temporibus aliquid eum inventore. Porro aperiam vero aut, a iure aliquam, voluptatibus veritatis voluptatum facere magnam quibusdam labore dignissimos similique cumque recusandae dolor.</p>
                  <div className="flex mt-3 w-fit flex-wrap gap-y-3 gap-x-3">
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80 flex items-center gap-x-1"><SiNextdotjs className="text-xs" /> Next JS</div>
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80">Next JS also something long</div>
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80">Next JS</div>
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80">Next JS</div>
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80">Next JS</div>
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80">Next JS</div>
                    <div className="px-2 text-xs sm:text-sm rounded-full text-white/90 bg-green-500/80">Next JS</div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </HeaderDescriptionLayout>
  );
}
