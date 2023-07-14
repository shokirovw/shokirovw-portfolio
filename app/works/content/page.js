import Image from "next/image";

import HeaderDescriptionLayout from "../../lib/HeaderDescriptionLayout";

import { AiFillYoutube, AiFillFolder } from 'react-icons/ai';

import { HiPresentationChartLine } from 'react-icons/hi';

import { PiMathOperationsFill } from 'react-icons/pi'

import { BsFillHddNetworkFill } from 'react-icons/bs';

import { MdScience } from 'react-icons/md';

export default function BlogPage () {
    return (
        <HeaderDescriptionLayout maxw="3" header={"Content I create"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis aperiam, fuga laborum quisquam totam. Accusamus ut exercitationem maxime aliquid."}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-3 ring-2 ring-emerald-600/80 rounded-xl bg-emerald-700/95 hover:bg-emerald-700/80 hover:ring-emerald-500/80 transition-all">
                    <a href="https://google.com">
                        <div className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
                    </a>
                    <div className="mt-4 px-1">
                        <div className="flex items-center gap-x-2 text-white/80">
                            <PiMathOperationsFill className="text-lg" />
                            <p className="text-sm tracking-wider uppercase">MATHEMATICS</p>
                        </div>
                        <a href="https://google.com"><h4 className="text-lg line-clamp-2 leading-snug mt-2">Why pi is so important? And why it is all about circle?</h4></a>
                        <div className="flex flex-wrap gap-x-1 gap-y-2 text-sm text-green-100/95 items-center mt-2">
                            <p><AiFillYoutube className="text-base mr-0.5" /></p>
                            <p>230K views</p>
                            <span>·</span>
                            <p>2 days ago</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 ring-2 ring-emerald-600/80 rounded-xl bg-emerald-700/95 hover:bg-emerald-700/80 hover:ring-emerald-500/80 transition-all">
                    <div className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
                    <div className="mt-4 px-1">
                        <div className="flex items-center gap-x-2 text-white/80">
                            <BsFillHddNetworkFill className="text-lg" />
                            <p className="text-sm tracking-wider uppercase">COMPUTER SCIENCE</p>
                        </div>
                        <h4 className="text-lg line-clamp-2 leading-snug mt-2">What When and Why to choose that database? Talking about databases</h4>
                        <div className="flex flex-wrap gap-x-1 gap-y-2 text-sm text-green-100/95 items-center mt-2">
                            <p><AiFillFolder className="text-base mr-0.5" /></p>
                            <p>Playlist</p>
                            <span>·</span>
                            <p>27 videos</p>
                            <span>·</span>
                            <p>1 month ago</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 ring-2 ring-emerald-600/80 rounded-xl bg-emerald-700/95 hover:bg-emerald-700/80 hover:ring-emerald-500/80 transition-all">
                    <div className="aspect-video rounded-xl overflow-hidden"><ImageComponent str={"pic"} /></div>
                    <div className="mt-4 px-1">
                        <div className="flex items-center gap-x-2 text-white/80">
                            <MdScience className="text-lg" />
                            <p className="text-sm tracking-wider uppercase">SCIENCE</p>
                        </div>
                        <h4 className="text-lg line-clamp-2 leading-snug mt-2">How do human hormones function?</h4>
                        <div className="flex flex-wrap gap-x-1 gap-y-2 text-sm text-green-100/95 items-center mt-2">
                            <p><HiPresentationChartLine className="text-base mr-0.5" /></p>
                            <p>Presentation</p>
                            <span>·</span>
                            <p>4 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderDescriptionLayout>
    );
}

function ImageComponent ({ str }) {
    return (
        <Image src={`/${str}.jpg`} width={1200} height={750} className='transition-all w-full h-full rounded-xl object-cover' style={{ objectPosition: "50% 22%" }}  />
    );
}