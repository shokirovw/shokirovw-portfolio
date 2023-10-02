import { AiFillGithub, AiOutlineTwitter, AiFillYoutube, AiOutlinePicture } from "react-icons/ai";

export const OurIcons = {
    Github: AiFillGithub,
    Twitter: AiOutlineTwitter,
    Youtube: AiFillYoutube,
    Picture: AiOutlinePicture
}

export function getIcon (iconname: IconName | string) {
    return OurIcons[iconname];
}

export type IconName = keyof typeof OurIcons;

export const AllIconNames = Object.keys(OurIcons);

export type DesignSocialLink = {
    href: string;
    iconname: string;
}