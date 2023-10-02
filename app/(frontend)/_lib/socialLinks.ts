import { AiFillGithub, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';

export type LinkType = {
    name: string;
    href: string;
    icon: IconType;
}

export const links: LinkType[] = [
    { name: "Github", href: "https://github.com", icon: AiFillGithub },
    { name: "Twitter", href: "https://twitter.com", icon: AiOutlineTwitter },
    { name: "Youtube", href: "https://youtube.com", icon: AiFillYoutube }
]

export type SocialLinkType = {
    name: string;
    href: string;
}

export const linkss: SocialLinkType[] = [
    { name: "Github", href: "https://github.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Youtube", href: "https://youtube.com" }
]

export default function generateSocialLinks (f: (link: LinkType, i: number) => JSX.Element) {
    return links.map(f);
}