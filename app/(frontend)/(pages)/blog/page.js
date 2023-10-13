import Image from "next/image";

import HeaderDescriptionLayout from "@/lib/HeaderDescriptionLayout";

import { AiFillThunderbolt } from 'react-icons/ai';

import { BiTimeFive } from 'react-icons/bi';

export default function BlogPage () {
    return (
        <HeaderDescriptionLayout header={"Blog"} desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempora facere ut eos quae natus quaerat mollitia, incidunt fugit doloremque similique! Dolorum culpa odit aperiam ipsam iusto asperiores, aut velit accusamus tempora."}>
            <div className="grid grid-cols-3 gap-6">
                <div className="blog-card vertical row-span-1 col-span-3 md:row-span-4 md:col-span-1">
                    <div className="max-h-72 md:h-72"><ImageComponent /></div>
                    <div className="p-1 py-2 space-y-3"><BlogProperties /><BlogBody variant={"vertical"} /></div>
                </div>
                <div className="blog-card vertical md:horizontal row-span-1 col-span-3 md:row-span-2 md:col-span-2">
                    <div className="max-h-48 md:w-5/12 md:max-h-full"><ImageComponent /></div>
                    <div className="p-1 py-2 space-y-3 md:w-7/12"><BlogProperties /><BlogBody variant={"middle"} /></div>
                </div>
                <div className="blog-card vertical row-span-1 col-span-3 md:row-span-2 md:col-span-1">
                    <div className="p-1 py-2 space-y-3"><BlogProperties  /><BlogBody variant={"small"} /></div>
                </div>
                <div className="blog-card vertical row-span-1 col-span-3 md:row-span-2 md:col-span-1">
                    <div className="p-1 py-2 space-y-3"><BlogProperties /><BlogBody variant={"small"} /></div>
                </div>
                <div className="blog-card vertical md:horizontal row-span-1 col-span-3 md:row-span-1 md:col-span-3">
                    <div className="max-h-48 md:w-3/12 md:max-h-full"><ImageComponent /></div>
                    <div className="p-1 py-2 space-y-3 md:w-9/12"><BlogProperties /><BlogBody variant={"long"} /></div>
                </div>
            </div>
        </HeaderDescriptionLayout>
    );
}

function ImageComponent ({ src = '/pic.jpg' }) {
    return (
        <Image src={src} width={1200} height={750} alt="" className='transition-all w-full h-full rounded-xl object-cover' style={{ objectPosition: "50% 22%" }}  />
    );
}

function BlogBody ({ variant }) {
    if (variant == "vertical") {
        return (
            <div className="space-y-2">
                <h3 className="text-2xl">Majestic conference held in National Uzbekistan Zoo</h3>
            </div>
        );
    } else if (variant == "middle") {
        return (
            <div className="space-y-2">
                <h3 className="text-2xl">Majestic conference held in National Uzbekistan Zoo</h3>
                <p className="text-content text-sm line-clamp-2 md:line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, quasi aut minus eveniet harum facilis fugit obcaecati suscipit consectetur consequatur laudantium natus vitae facere, vero deserunt eius, incidunt itaque? Nam soluta laudantium eum. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, quasi aut minus eveniet harum facilis fugit obcaecati suscipit consectetur consequatur </p>
            </div>
        );
    } else if (variant == "small") {
        return (
            <div className="space-y-2">
                <h3 className="text-xl">Majestic conference held in National Uzbekistan Zoo</h3>
                <p className="text-content text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, quasi aut minus eveniet harum facilis fugit obcaecati suscipit consectetur consequatur laudantium natus vitae facere, vero deserunt eius, incidunt itaque? Nam soluta laudantium eum. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, quasi aut minus eveniet harum facilis fugit obcaecati suscipit consectetur consequatur </p>
            </div>
        );
    } else {
        return (
            <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl">Majestic conference held in National Uzbekistan Zoo</h3>
                <p className="text-content text-sm line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, quasi aut minus eveniet harum facilis fugit obcaecati suscipit consectetur consequatur laudantium natus vitae facere, vero deserunt eius, incidunt itaque? Nam soluta laudantium eum. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut, quasi aut minus eveniet harum facilis fugit obcaecati suscipit consectetur consequatur </p>
            </div>
        );
    }
}

function BlogProperties () {
    return (
        <div className="flex items-center justify-between text-white/80 text-sm">
            <div className="flex items-center space-x-1">
                <AiFillThunderbolt />
                <p>22324 views</p>
            </div>
            <div className="px-2 py-0 bg-green-700/90 rounded-full text-green-100">
                Social
            </div>
        </div>
    );
}