import { AiFillGithub, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';

const links = [
    { name: "Github", href: "https://github.com", icon: AiFillGithub },
    { name: "Twitter", href: "https://twitter.com", icon: AiOutlineTwitter },
    { name: "Youtube", href: "https://youtube.com", icon: AiFillYoutube }
]

export default function generateSocialLinks (f) {
    return links.map(f);
}