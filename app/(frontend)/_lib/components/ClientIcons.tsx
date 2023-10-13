import { AiFillGithub, AiOutlineTwitter, AiFillYoutube, AiOutlinePicture, AiOutlineDownload, AiOutlinePaperClip, AiOutlineBook } from "react-icons/ai";

import { IoIosFlash } from 'react-icons/io';

import { SiReadthedocs } from 'react-icons/si';

export const OurIcons = {
    Github: AiFillGithub,
    Twitter: AiOutlineTwitter,
    Youtube: AiFillYoutube,
    Picture: AiOutlinePicture,
    Download: AiOutlineDownload,
    Paperclip: AiOutlinePaperClip,
    Flash: IoIosFlash,
    Docs: SiReadthedocs,
    Book: AiOutlineBook
}

export function getIcon (iconname: IconName) {
    return OurIcons[iconname];
}

export type IconName = keyof typeof OurIcons;

export const AllIconNames = Object.keys(OurIcons);

export type DesignSocialLink = {
    href: string;
    iconname: string;
}