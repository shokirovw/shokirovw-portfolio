import { AiFillGithub, AiOutlineTwitter, AiFillYoutube, AiOutlinePicture, AiOutlineDownload, AiOutlinePaperClip, AiOutlineBook, AiOutlineInstagram, AiOutlineMessage, AiOutlineReddit, AiOutlineFacebook } from "react-icons/ai";

import { IoIosFlash } from 'react-icons/io';

import { SiReadthedocs } from 'react-icons/si';

import { FaQuora } from "react-icons/fa";

export const OurIcons = {
    Github: AiFillGithub,
    Twitter: AiOutlineTwitter,
    Youtube: AiFillYoutube,
    Picture: AiOutlinePicture,
    Download: AiOutlineDownload,
    Paperclip: AiOutlinePaperClip,
    Flash: IoIosFlash,
    Docs: SiReadthedocs,
    Book: AiOutlineBook,
    Instagram: AiOutlineInstagram,
    Reddit: AiOutlineReddit,
    Quora: FaQuora,
    Facebook: AiOutlineFacebook
}

export function getIcon (iconname: IconName | "" | " ") {
    if (iconname == "" || iconname == " ") {
        return () => <></>;
    }

    return OurIcons[iconname];
}

export type IconName = keyof typeof OurIcons;

export const AllIconNames = Object.keys(OurIcons);

export type DesignSocialLink = {
    href: string;
    iconname: IconName;
}