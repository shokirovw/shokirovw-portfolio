import Image from "next/image";

import HeaderDescriptionLayout from "../../lib/HeaderDescriptionLayout";

import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

export default function BlogPage () {
    return (
        <HeaderDescriptionLayout header={"Ongoing Projects"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis aperiam, fuga laborum quisquam totam. Accusamus ut exercitationem maxime aliquid."}>
            <div className="grid grid-cols-1 gap-5">
                <div className="bg-emerald-700/70 rounded-2xl p-5 relative ring-2 ring-emerald-700">
                    <div className="w-10/12 space-y-4">
                        <div className="w-full h-fit flex gap-x-5">
                            <div className="w-fit">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <ImageComponent str={"pic"} />
                                </div>
                            </div>
                            <div className="grow">
                                <p className="font-heading text-emerald-100 text-xl md:text-2xl lg:text-3xl">SAT seat availibility</p>
                                <p className="font-regular text-emerald-100 text-sm leading-4">SAT seat availibility</p>
                            </div>
                        </div>
                        <p className="text-content text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum ea, porro earum optio eum ratione sed impedit iusto doloribus!</p>
                        <div className="flex gap-x-5 flex-wrap">
                            <a href="" className="text-sm text-green-400/90 underline">See live</a>
                            <a href="" className="text-sm text-green-400/90">View on Github</a>
                        </div>
                    </div>
                    <div className="space-y-3 absolute right-4 top-4">
                        <AiFillGithub className="text-2xl text-white" />
                        <AiFillGithub className="text-2xl text-white" />
                        <AiFillGithub className="text-2xl text-white" />
                    </div>
                </div>
                <div className="bg-emerald-700/70 rounded-2xl p-5 relative ring-2 ring-emerald-700">
                    <div className="w-10/12 space-y-4">
                        <div className="w-full h-fit flex gap-x-5">
                            <div className="w-fit">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <ImageComponent str={"pic"} />
                                </div>
                            </div>
                            <div className="grow">
                                <p className="font-heading text-emerald-100 text-xl md:text-2xl lg:text-3xl">SAT seat availibility</p>
                                <p className="font-regular text-emerald-100 text-sm leading-4">SAT seat availibility</p>
                            </div>
                        </div>
                        <p className="text-content text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum ea, porro earum optio eum ratione sed impedit iusto doloribus!</p>
                        <div className="flex gap-x-5 flex-wrap">
                            <a href="" className="text-sm text-green-400/90 underline">See live</a>
                            <a href="" className="text-sm text-green-400/90">View on Github</a>
                        </div>
                    </div>
                    <div className="space-y-3 absolute right-4 top-4">
                        <AiFillGithub className="text-2xl text-white" />
                        <AiFillGithub className="text-2xl text-white" />
                        <AiFillGithub className="text-2xl text-white" />
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