
import { PiPaintBucketFill } from "react-icons/pi";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaFile } from "react-icons/fa6";
import Link from "next/link";

export default function P5JSList () {
    return (
        <div className="w-full min-h-[330px] mt-10 mb-16">
            <div className="container max-w-6xl mx-auto px-6">
                <h1 className='text-6xl lg:text-7xl text-center'>P5JS Samples</h1>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-5 mt-10">
                    <Link href={"https://google.com"}>
                        <div className="flex gap-x-3 items-center text-emerald-300 bg-emerald-500/30 hover:bg-emerald-500/40 px-4 py-2 rounded-lg max-w-[210px] md:max-w-[250px]">
                            <PiPaintBucketFill className="text-emerald-300/80 w-4 h-4 flex-shrink-0" />
                            <p className="flex-grow text-sm md:text-base text-emerald-200/90 truncate">Random Walk</p>
                        </div>
                    </Link>
                    <Link href={"https://google.com"}>
                        <div className="flex gap-x-3 items-center text-emerald-300 bg-emerald-500/30 hover:bg-emerald-500/40 px-4 py-2 rounded-lg max-w-[210px] md:max-w-[250px]">
                            <HiMiniPaintBrush className="text-emerald-300/80 w-4 h-4 flex-shrink-0" />
                            <p className="flex-grow text-sm md:text-base text-emerald-200/90 truncate">Rain</p>
                        </div>
                    </Link>
                    <Link href={"https://google.com"}>
                        <div className="flex gap-x-3 items-center text-emerald-300 bg-emerald-500/30 hover:bg-emerald-500/40 px-4 py-2 rounded-lg max-w-[210px] md:max-w-[250px]">
                            <FaFile className="text-emerald-300/80 w-4 h-4 flex-shrink-0" />
                            <p className="flex-grow text-sm md:text-base text-emerald-200/90 truncate">Color interpolation</p>
                        </div>
                    </Link>
                    <Link href={"https://google.com"}>
                        <div className="flex gap-x-3 items-center text-emerald-300 bg-emerald-500/30 hover:bg-emerald-500/40 px-4 py-2 rounded-lg max-w-[210px] md:max-w-[250px]">
                            <PiPaintBucketFill className="text-emerald-300/80 w-4 h-4 flex-shrink-0" />
                            <p className="flex-grow text-sm md:text-base text-emerald-200/90 truncate">Random points</p>
                        </div>
                    </Link>
                </div>
            </div>          
        </div>
    )
}