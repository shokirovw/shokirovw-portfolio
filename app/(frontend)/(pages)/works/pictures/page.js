'use client';

import Image from "next/image";

import HeaderDescriptionLayout from "@/lib/HeaderDescriptionLayout";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import '@splidejs/react-splide/css';

function BlogPage () {
    return (
        <HeaderDescriptionLayout header={"Blog"} desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora facere ut eos quae natus quaerat mollitia, incidunt fugit doloremque similique! Dolorum culpa odit aperiam ipsam iusto asperiores, aut velit accusamus tempora."}>
            
        </HeaderDescriptionLayout>
    );
}

function ImageComponent ({ str }) {
    return (
        <Image src={`/${str}.jpg`} width={1200} height={750} className='transition-all w-full h-full object-cover' style={{ objectPosition: "50% 22%" }}  />
    );
}

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
    <HeaderDescriptionLayout maxw="7" header={"Pictures"} desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora facere ut eos quae natus quaerat mollitia, incidunt fugit doloremque similique! Dolorum culpa odit aperiam ipsam iusto asperiores, aut velit accusamus tempora."}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden ring-2 ring-emerald-900/95 transition-all hover:brightness-105 cursor-pointer hover:ring-emerald-600/95"><ImageComponent str={"pic"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"me"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"me"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
            <div onClick={openModal} className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"me"} /></div>
        </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl h-80 transform overflow-hidden rounded-xl bg-emerald-500 ring-2 ring-emerald-500 text-left align-middle shadow-xl transition-all">
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <ImageComponent str={"me"} />
                        </SplideSlide>
                        <SplideSlide>
                            <ImageComponent str={"pic"} />
                        </SplideSlide>
                    </Splide>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </HeaderDescriptionLayout>
    </>
  );
}